import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Laptop } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class LaptopService {
  private logger = new Logger(LaptopService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const laptops = await this.prismaService.laptop.findMany({
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

    return laptops;
  }

  async getById(id: string) {
    const laptop: Laptop = await this.prismaService.laptop
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return laptop;
  }

  async getByModel(model: string) {
    const laptop: Laptop = await this.prismaService.laptop
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return laptop;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const laptop: Laptop = await this.prismaService.laptop
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return laptop;
  }

  async create(dto: CreateItemDto) {
    const laptop: Laptop = await this.prismaService.laptop
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return laptop;
  }

  async update(id: string, dto: UpdateItemDto) {
    const laptop: Laptop = await this.prismaService.laptop
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

    return laptop;
  }

  async delete(id: string) {
    await this.prismaService.laptop
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
