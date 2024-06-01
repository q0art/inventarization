import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { DesktopService } from "@desktop/desktop.service";
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
  Query,
} from "@nestjs/common";

import { CreateDesktopDto, UpdateDesktopDto } from "./dtos";

@Controller("desktop")
export class DesktopController {
  constructor(private readonly desktopService: DesktopService) {}

  @Get("")
  async getAll() {
    return await this.desktopService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const desktopById = await this.desktopService.getById(id);

    if (!desktopById) throw new BadRequestException(`desktop not found by id: ${id}`);

    return desktopById;
  }

  @Post("")
  async create(@Body() dto: CreateDesktopDto) {
    const { name } = dto;
    const desktopByName = await this.desktopService.getByName(name);

    if (desktopByName) throw new ConflictException(`desktop already exist with name: ${name}`);

    return await this.desktopService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateDesktopDto) {
    const desktopById = await this.desktopService.getById(id);

    if (!desktopById) throw new BadRequestException(`desktop not found by id`);

    const { name } = dto;
    const desktopByName = await this.desktopService.getByName(name);

    if (desktopByName && desktopByName.name !== dto.name)
      throw new ConflictException(`desktop already exist with name: ${name}`);

    return await this.desktopService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const desktopById = await this.desktopService.getById(id);

    if (!desktopById) throw new BadRequestException(`desktop not found by id`);

    return this.desktopService.delete(id);
  }
}
