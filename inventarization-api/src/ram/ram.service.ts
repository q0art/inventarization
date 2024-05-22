import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Ram } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class RamService {
  private logger = new Logger(RamService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const rams = await this.prismaService.ram.findMany({
      select: {
        id: true,
        model: true,
        manufacturerCode: true,
        createdAt: true,
        updatedAt: true,
        brand: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return rams;
  }

  async getById(id: string) {
    const ram: Ram = await this.prismaService.ram
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return ram;
  }

  async getByModel(model: string) {
    const ram: Ram = await this.prismaService.ram
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return ram;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const ram: Ram = await this.prismaService.ram
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return ram;
  }

  async create(dto: CreateItemDto) {
    const ram: Ram = await this.prismaService.ram
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return ram;
  }

  async update(id: string, dto: UpdateItemDto) {
    const ram: Ram = await this.prismaService.ram
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

    return ram;
  }

  async delete(id: string) {
    const ram: Ram = await this.prismaService.ram
      .delete({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return ram;
  }
}
