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
    const workspace: Workspace = await this.prismaService.workspace
      .findMany({
        where: { id },
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
