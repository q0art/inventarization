import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Mousepad } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class MousepadService {
  private logger = new Logger(MousepadService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const mousepads = await this.prismaService.mousepad.findMany({
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

    return mousepads;
  }

  async getById(id: string) {
    const mousepad: Mousepad = await this.prismaService.mousepad
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return mousepad;
  }

  async getByModel(model: string) {
    const mousepad: Mousepad = await this.prismaService.mousepad
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return mousepad;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const mousepad: Mousepad = await this.prismaService.mousepad
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return mousepad;
  }

  async create(dto: CreateItemDto) {
    const mousepad: Mousepad = await this.prismaService.mousepad
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return mousepad;
  }

  async update(id: string, dto: UpdateItemDto) {
    const mousepad: Mousepad = await this.prismaService.mousepad
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

    return mousepad;
  }

  async delete(id: string) {
    await this.prismaService.mousepad
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
