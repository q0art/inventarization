import { JwtPayload } from "@app/shared/types";
import { BadRequestException, ForbiddenException, Injectable, Logger } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";
import { CreateUserDto } from "@user/dtos";
import { hash } from "bcryptjs";

@Injectable()
export class UserService {
  private logger = new Logger(UserService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getById(id: string) {
    const user: User = await this.prismaService.user
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return user;
  }

  async getByEmail(email: string) {
    const user: User = await this.prismaService.user
      .findUnique({
        where: { email },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return user;
  }

  async create(dto: CreateUserDto) {
    const { email, password } = dto;
    const passwordHash = await this.hashPassword(password);

    const user: User = await this.prismaService.user
      .create({
        data: { email, passwordHash },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return user;
  }

  async delete(id: string, jwtPayload: JwtPayload) {
    if (jwtPayload.id !== id) throw new ForbiddenException("u can delete only yourself");

    const userById = await this.getById(id);

    if (!userById) throw new BadRequestException(`user not found by id: ${id}`);

    const user: User = await this.prismaService.user
      .delete({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return user;
  }

  private async hashPassword(password: string, salt = 12) {
    return await hash(password, salt);
  }
}
