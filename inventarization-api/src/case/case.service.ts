import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { Injectable, Logger } from "@nestjs/common";
import { Case } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class CaseService {
  private logger = new Logger(CaseService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const cases = await this.prismaService.case.findMany({
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

    return cases;
  }

  async getById(id: string) {
    const _case: Case = await this.prismaService.case
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return _case;
  }

  async getByModel(model: string) {
    const _case: Case = await this.prismaService.case
      .findUnique({
        where: { model },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return _case;
  }

  async getByManufacturerCode(manufacturerCode: string) {
    const _case: Case = await this.prismaService.case
      .findUnique({
        where: { manufacturerCode },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return _case;
  }

  async create(dto: CreateItemDto) {
    const _case: Case = await this.prismaService.case
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return _case;
  }

  async update(id: string, dto: UpdateItemDto) {
    const _case: Case = await this.prismaService.case
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

    return _case;
  }

  async delete(id: string) {
    const _case: Case = await this.prismaService.case
      .delete({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return _case;
  }
}
