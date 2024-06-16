import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateWorkspaceDto, UpdateWorkspaceDto } from "@workspace/dtos";
import { WorkspaceService } from "@workspace/workspace.service";

@Controller("workspace")
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Get("")
  async getAll() {
    return await this.workspaceService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const workspaceById = await this.workspaceService.getById(id);

    if (!workspaceById) throw new BadRequestException(`workspace not found by id: ${id}`);

    return workspaceById;
  }

  @Post("")
  async create(@Body() dto: CreateWorkspaceDto) {
    return await this.workspaceService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, dto: UpdateWorkspaceDto) {
    const workspaceById = await this.workspaceService.getById(id);

    if (!workspaceById) throw new BadRequestException(`workspace not found by id: ${id}`);

    const { name } = dto;
    const workspaceByName = await this.workspaceService.getByName(name);

    if (workspaceById.name !== name && workspaceByName?.name === name)
      throw new ConflictException(`workspace already exist with name: ${name}`);

    return await this.workspaceService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const workspaceById = await this.workspaceService.getById(id);

    if (!workspaceById) throw new BadRequestException(`workspace not found by id: ${id}`);

    return await this.workspaceService.delete(id);
  }
}
