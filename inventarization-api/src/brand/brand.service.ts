import { CreateBrandDto, UpdateBrandDto } from "@brand/dtos";
import { Injectable, Logger } from "@nestjs/common";
import { Brand } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class BrandService {
  private logger = new Logger(BrandService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAllByName(name: string) {
    const brands: Brand[] = await this.prismaService.brand
      .findMany({
        where: {
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return [];
      });

    return brands;
  }

  async getById(id: string) {
    const brand: Brand = await this.prismaService.brand
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return brand;
  }

  async getByName(name: string) {
    const brand: Brand = await this.prismaService.brand
      .findUnique({
        where: { name },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return brand;
  }

  async create(dto: CreateBrandDto) {
    const brand: Brand = await this.prismaService.brand
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return brand;
  }

  async update(id: string, dto: UpdateBrandDto) {
    const brand: Brand = await this.prismaService.brand
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

    return brand;
  }

  async delete(id: string) {
    const brand: Brand = await this.prismaService.brand
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
