import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Gpu } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class GpuService {
  private logger = new Logger(GpuService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const gpus = await this.prismaService.gpu.findMany({
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

    return gpus;
  }

  async getById(id: string) {
    const gpu: Gpu = await this.prismaService.gpu
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return gpu;
  }

  async getByModel(model: string) {
    const gpu: Gpu = await this.prismaService.gpu
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return gpu;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const gpu: Gpu = await this.prismaService.gpu
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return gpu;
  }

  async create(dto: CreateItemDto) {
    const gpu: Gpu = await this.prismaService.gpu
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return gpu;
  }

  async update(id: string, dto: UpdateItemDto) {
    const gpu: Gpu = await this.prismaService.gpu
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

    return gpu;
  }

  async delete(id: string) {
    const gpu: Gpu = await this.prismaService.gpu
      .delete({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return gpu;
  }
}
