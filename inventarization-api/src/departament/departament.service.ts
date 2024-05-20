import { CreateDepartamentDto, UpdateDepartamentDto } from "@departament/dtos";
import { Injectable, Logger } from "@nestjs/common";
import { Departament } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class DepartamentService {
  private logger = new Logger(DepartamentService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAllByName(name: string) {
    const departaments: Departament[] = await this.prismaService.departament
      .findMany({
        where: {
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return [];
      });

    return departaments;
  }

  async getById(id: string) {
    const departament: Departament = await this.prismaService.departament
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return departament;
  }

  async getByName(name: string) {
    const departament: Departament = await this.prismaService.departament
      .findUnique({
        where: { name },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return departament;
  }

  async create(dto: CreateDepartamentDto) {
    const departament: Departament = await this.prismaService.departament
      .create({
        data: { ...dto },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return departament;
  }

  async update(id: string, dto: UpdateDepartamentDto) {
    const departament: Departament = await this.prismaService.departament
      .update({
        where: { id },
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return departament;
  }

  async delete(id: string) {
    const departament: Departament = await this.prismaService.departament
      .delete({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return id;
  }
}
