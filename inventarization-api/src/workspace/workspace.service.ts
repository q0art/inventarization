import { Injectable, Logger } from "@nestjs/common";
import { Workspace } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";
import { CreateWorkspaceDto, UpdateWorkspaceDto } from "@workspace/dtos";

@Injectable()
export class WorkspaceService {
  private logger = new Logger(WorkspaceService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const workspaces: Workspace[] = await this.prismaService.workspace.findMany().catch((error) => {
      this.logger.error(error);
      return [];
    });

    return workspaces;
  }

  async getById(id: string) {
    const workspace = await this.prismaService.workspace.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        desktop: {
          select: {
            id: true,
            name: true,
          },
        },
        monitor: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
        mouse: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
        mousepad: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
        keyboard: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
        headphone: {
          select: {
            id: true,
            model: true,
            manufacturerCode: true,
          },
        },
      },
    });

    return workspace;
  }

  async getByName(name: string) {
    const workspace: Workspace = await this.prismaService.workspace
      .findUnique({
        where: { name },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return workspace;
  }

  async create(dto: CreateWorkspaceDto) {
    const workspace: Workspace = await this.prismaService.workspace
      .create({
        data: { ...dto },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return workspace;
  }

  async update(id: string, dto: UpdateWorkspaceDto) {
    const workspace: Workspace = await this.prismaService.workspace
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

    return workspace;
  }

  async delete(id: string) {
    const workspace: Workspace = await this.prismaService.workspace
      .delete({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return workspace;
  }
}
