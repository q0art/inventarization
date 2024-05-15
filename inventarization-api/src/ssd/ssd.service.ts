import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Ssd } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class SsdService {
  private logger = new Logger(SsdService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAllByModel(model: string) {
    const ssds: Ssd[] = await this.prismaService.ssd
      .findMany({
        where: {
          model: {
            contains: model,
            mode: "insensitive",
          },
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return [];
      });

    return ssds;
  }

  async getById(id: string) {
    const ssd: Ssd = await this.prismaService.ssd
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return ssd;
  }

  async getByModel(model: string) {
    const ssd: Ssd = await this.prismaService.ssd
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return ssd;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const ssd: Ssd = await this.prismaService.ssd
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return ssd;
  }

  async create(dto: CreateItemDto) {
    const ssd: Ssd = await this.prismaService.ssd
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return ssd;
  }

  async update(id: string, dto: UpdateItemDto) {
    const ssd: Ssd = await this.prismaService.ssd
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

    return ssd;
  }

  async delete(id: string) {
    const ssd: Ssd = await this.prismaService.ssd
      .delete({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return ssd;
  }
}
