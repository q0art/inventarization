import { Injectable, Logger } from "@nestjs/common";
import { Desktop } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

import { CreateDesktopDto, UpdateDesktopDto } from "./dtos";

@Injectable()
export class DesktopService {
  private logger = new Logger(DesktopService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const desktops: Desktop[] = await this.prismaService.desktop.findMany().catch((error) => {
      this.logger.error(error);
      return null;
    });

    return desktops;
  }

  async getById(id: string) {
    const desktop = await this.prismaService.desktop.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        cpu: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
        gpu: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
        motherboard: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
        ram: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
        ssd: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
        cooler: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
        case: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
      },
    });

    return desktop;
  }

  async getByName(name: string) {
    const desktop: Desktop = await this.prismaService.desktop
      .findUnique({
        where: { name },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return desktop;
  }

  async create(dto: CreateDesktopDto) {
    const desktop: Desktop = await this.prismaService.desktop
      .create({
        data: {
          ...dto,
        },
        select: {
          id: true,
          name: true,
          cpu: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          gpu: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          motherboard: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          ram: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          ssd: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          cooler: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          case: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return desktop;
  }

  async update(id: string, dto: UpdateDesktopDto) {
    const desktop: Desktop = await this.prismaService.desktop
      .update({
        where: { id },
        data: {
          ...dto,
        },
        select: {
          id: true,
          name: true,
          cpu: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          gpu: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          motherboard: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          ram: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          ssd: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          cooler: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
          case: {
            select: {
              id: true,
              model: true,
              manufacturerCode: true,
            },
          },
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return desktop;
  }

  async delete(id: string) {
    await this.prismaService.desktop
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
