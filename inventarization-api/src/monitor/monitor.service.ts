import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Monitor } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class MonitorService {
  private logger = new Logger(MonitorService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const monitors = await this.prismaService.monitor.findMany({
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

    return monitors;
  }

  async getById(id: string) {
    const monitor: Monitor = await this.prismaService.monitor
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return monitor;
  }

  async getByModel(model: string) {
    const monitor: Monitor = await this.prismaService.monitor
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return monitor;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const monitor: Monitor = await this.prismaService.monitor
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return monitor;
  }

  async create(dto: CreateItemDto) {
    const monitor: Monitor = await this.prismaService.monitor
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return monitor;
  }

  async update(id: string, dto: UpdateItemDto) {
    const monitor: Monitor = await this.prismaService.monitor
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

    return monitor;
  }

  async delete(id: string) {
    await this.prismaService.monitor
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
