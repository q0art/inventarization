import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Headphone } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class HeadphoneService {
  private logger = new Logger(HeadphoneService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const headphones = await this.prismaService.headphone.findMany({
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

    return headphones;
  }

  async getById(id: string) {
    const headphone: Headphone = await this.prismaService.headphone
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return headphone;
  }

  async getByModel(model: string) {
    const headphone: Headphone = await this.prismaService.headphone
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return headphone;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const headphone: Headphone = await this.prismaService.headphone
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return headphone;
  }

  async create(dto: CreateItemDto) {
    const headphone: Headphone = await this.prismaService.headphone
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return headphone;
  }

  async update(id: string, dto: UpdateItemDto) {
    const headphone: Headphone = await this.prismaService.headphone
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

    return headphone;
  }

  async delete(id: string) {
    await this.prismaService.headphone
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
