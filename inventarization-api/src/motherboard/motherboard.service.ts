import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Motherboard } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class MotherboardService {
  private logger = new Logger(MotherboardService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const motherboards = await this.prismaService.motherboard.findMany({
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

    return motherboards;
  }

  async getById(id: string) {
    const motherboard: Motherboard = await this.prismaService.motherboard
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return motherboard;
  }

  async getByModel(model: string) {
    const motherboard: Motherboard = await this.prismaService.motherboard
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return motherboard;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const motherboard: Motherboard = await this.prismaService.motherboard
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return motherboard;
  }

  async create(dto: CreateItemDto) {
    const motherboard: Motherboard = await this.prismaService.motherboard
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return motherboard;
  }

  async update(id: string, dto: UpdateItemDto) {
    const motherboard: Motherboard = await this.prismaService.motherboard
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

    return motherboard;
  }

  async delete(id: string) {
    const motherboard: Motherboard = await this.prismaService.motherboard
      .delete({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return motherboard;
  }
}
