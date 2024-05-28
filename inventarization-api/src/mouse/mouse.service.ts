import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Mouse } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class MouseService {
  private logger = new Logger(MouseService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const mouses = await this.prismaService.mouse.findMany({
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

    return mouses;
  }

  async getById(id: string) {
    const mouse: Mouse = await this.prismaService.mouse
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return mouse;
  }

  async getByModel(model: string) {
    const mouse: Mouse = await this.prismaService.mouse
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return mouse;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const mouse: Mouse = await this.prismaService.mouse
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return mouse;
  }

  async create(dto: CreateItemDto) {
    const mouse: Mouse = await this.prismaService.mouse
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return mouse;
  }

  async update(id: string, dto: UpdateItemDto) {
    const mouse: Mouse = await this.prismaService.mouse
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

    return mouse;
  }

  async delete(id: string) {
    await this.prismaService.mouse
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
