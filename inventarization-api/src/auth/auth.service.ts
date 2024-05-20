import { JwtPayload } from "@app/shared/types";
import { SignInDto, SignUpDto } from "@auth/dtos";
import { BadRequestException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Token } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";
import { UserService } from "@user/user.service";
import { compare } from "bcryptjs";
import { add as create } from "date-fns";
import { Response } from "express";
import { v4 as uuid } from "uuid";

@Injectable()
export class AuthService {
  static refreshTokenKey = "refresh_token";

  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(dto: SignInDto, userAgent: string) {
    const { email, password } = dto;
    const userByEmail = await this.userService.getByEmail(email);

    if (!userByEmail || !(await compare(password, userByEmail.passwordHash)))
      throw new BadRequestException("invalid fields");

    const jwtPayload: JwtPayload = {
      id: userByEmail.id,
      email: userByEmail.email,
    };

    return await this.createTokens(jwtPayload, userAgent);
  }

  async signUp(dto: SignUpDto, userAgent: string) {
    const { email } = dto;
    const userByEmail = await this.userService.getByEmail(email);

    if (userByEmail) throw new BadRequestException(`user already exist with email: ${email}`);

    const user = await this.userService.create(dto);

    const jwtPayload: JwtPayload = {
      id: user.id,
      email: user.email,
    };

    return await this.createTokens(jwtPayload, userAgent);
  }

  async updateTokens(_refreshToken: string, userAgent: string) {
    const { refreshToken, expiredAt, userId } = await this.prismaService.token.findUnique({
      where: { refreshToken: _refreshToken },
    });

    if (!refreshToken) throw new UnauthorizedException("refresh token dont exist");

    await this.deleteRefreshToken(refreshToken);

    if (new Date(expiredAt) < new Date())
      throw new UnauthorizedException(`refresh token is expired: ${expiredAt}`);

    const user = await this.userService.getById(userId);

    if (!user) throw new UnauthorizedException(`refresh token has invalid userId: ${userId}`);

    return this.createTokens(user, userAgent);
  }

  async setRefreshTokenToCookies(_refreshToken: Token, accessToken: string, response: Response) {
    const { refreshToken, expiredAt } = _refreshToken;
    const expires = new Date(expiredAt);

    if (!refreshToken) throw new UnauthorizedException("token not exist");

    response.cookie(AuthService.refreshTokenKey, refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      expires,
      secure: false,
      path: "/",
    });

    response.status(HttpStatus.CREATED).json({
      accessToken,
    });
  }

  async removeRefreshTokenToCookies(token: string, response: Response) {
    if (token) {
      await this.deleteRefreshToken(token);

      response.clearCookie(AuthService.refreshTokenKey);
    }

    response.status(HttpStatus.OK);
  }

  private async deleteRefreshToken(refreshToken: string) {
    return await this.prismaService.token.delete({
      where: { refreshToken },
    });
  }

  private async createTokens(jwtPayload: JwtPayload, userAgent: string) {
    const { id } = jwtPayload;
    const accessToken = this.jwtService.sign(jwtPayload);
    const refreshToken = await this.upsertRefreshToken(id, userAgent);

    return { accessToken, refreshToken };
  }

  private async upsertRefreshToken(userId: string, userAgent: string) {
    const token = await this.prismaService.token.findFirst({
      where: {
        userId,
        userAgent,
      },
    });

    const refreshToken = token?.refreshToken ?? "";
    const base = {
      refreshToken: uuid(),
      expiredAt: create(new Date(), { days: 30 }),
    };

    return await this.prismaService.token.upsert({
      where: { refreshToken },
      update: { ...base },
      create: {
        ...base,
        userId,
        userAgent,
      },
    });
  }
}
