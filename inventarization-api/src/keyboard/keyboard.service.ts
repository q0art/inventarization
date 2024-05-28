import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Keyboard } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class KeyboardService {
  private logger = new Logger(KeyboardService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const keyboards = await this.prismaService.keyboard.findMany({
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

    return keyboards;
  }

  async getById(id: string) {
    const keyboard: Keyboard = await this.prismaService.keyboard
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return keyboard;
  }

  async getByModel(model: string) {
    const keyboard: Keyboard = await this.prismaService.keyboard
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return keyboard;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const keyboard: Keyboard = await this.prismaService.keyboard
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return keyboard;
  }

  async create(dto: CreateItemDto) {
    const keyboard: Keyboard = await this.prismaService.keyboard
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return keyboard;
  }

  async update(id: string, dto: UpdateItemDto) {
    const keyboard: Keyboard = await this.prismaService.keyboard
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

    return keyboard;
  }

  async delete(id: string) {
    await this.prismaService.keyboard
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
