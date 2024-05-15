import { IsPublicResource, UserAgent } from "@app/shared/decorators";
import { Cookies } from "@app/shared/decorators/cookies.decorator";
import { AuthService } from "@auth/auth.service";
import { SignInDto, SignUpDto } from "@auth/dtos";
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UnauthorizedException,
} from "@nestjs/common";
import { Response } from "express";

@IsPublicResource()
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-in")
  async signIn(
    @Body() dto: SignInDto,
    @Res() response: Response,
    @UserAgent() userAgent: string,
  ) {
    const { refreshToken, accessToken } = await this.authService.signIn(
      dto,
      userAgent,
    );

    await this.authService.setRefreshTokenToCookies(
      refreshToken,
      accessToken,
      response,
    );
  }

  @Post("sign-up")
  async signUp(
    @Body() dto: SignUpDto,
    @Res() response: Response,
    @UserAgent() userAgent: string,
  ) {
    const { refreshToken, accessToken } = await this.authService.signUp(
      dto,
      userAgent,
    );

    await this.authService.setRefreshTokenToCookies(
      refreshToken,
      accessToken,
      response,
    );
  }

  @Post("sign-out")
  async signOut(
    @Cookies(AuthService.refreshTokenKey) refreshToken: string,
    @Res() response: Response,
  ) {
    if (refreshToken)
      await this.authService.removeRefreshTokenToCookies(
        refreshToken,
        response,
      );

    response.sendStatus(HttpStatus.OK);
  }

  @Get("update-tokens")
  async updateTokens(
    @Cookies(AuthService.refreshTokenKey) _refreshToken: string,
    @Res() response: Response,
    @UserAgent() userAgent: string,
  ) {
    if (!_refreshToken)
      throw new UnauthorizedException("refresh token dont exist");

    const { accessToken, refreshToken } = await this.authService.updateTokens(
      _refreshToken,
      userAgent,
    );

    if (!accessToken || !refreshToken)
      throw new UnauthorizedException(`access and refresh tokens dont'exist`);

    await this.authService.setRefreshTokenToCookies(
      refreshToken,
      accessToken,
      response,
    );
  }
}
