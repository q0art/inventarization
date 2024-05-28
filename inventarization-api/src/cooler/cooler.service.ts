import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Cooler } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class CoolerService {
  private logger = new Logger(CoolerService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const coolers = await this.prismaService.cooler.findMany({
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

    return coolers;
  }

  async getById(id: string) {
    const cooler: Cooler = await this.prismaService.cooler
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return cooler;
  }

  async getByModel(model: string) {
    const cooler: Cooler = await this.prismaService.cooler
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return cooler;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const cooler: Cooler = await this.prismaService.cooler
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return cooler;
  }

  async create(dto: CreateItemDto) {
    const cooler: Cooler = await this.prismaService.cooler
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return cooler;
  }

  async update(id: string, dto: UpdateItemDto) {
    const cooler: Cooler = await this.prismaService.cooler
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

    return cooler;
  }

  async delete(id: string) {
    await this.prismaService.cooler
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
