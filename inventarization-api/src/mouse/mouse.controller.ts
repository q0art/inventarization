import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
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
import { MouseService } from "src/mouse/mouse.service";

@Controller("mouse")
export class MouseController {
  constructor(private readonly mouseService: MouseService) {}

  @Get("")
  async getAll() {
    return await this.mouseService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const mouseById = await this.mouseService.getById(id);

    if (!mouseById) throw new BadRequestException(`mouse not found by id: ${id}`);

    return mouseById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const mouseByModel = await this.mouseService.getByModel(model);

    if (mouseByModel) throw new ConflictException(`mouse already exist with model: ${model}`);

    const mouseByManufacturerCode = await this.mouseService.getByManufacturerCode(manufacturerCode);

    if (mouseByManufacturerCode)
      throw new ConflictException(
        `mouse already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.mouseService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const mouseById = await this.mouseService.getById(id);

    if (!mouseById) throw new BadRequestException(`mouse not found by id`);

    const { model, manufacturerCode } = dto;

    const mouseByModel = await this.mouseService.getByModel(model);

    if (mouseById.model !== model && mouseByModel?.model === model)
      throw new ConflictException(`mouse already exist with model: ${model}`);

    const mouseByManufacturerCode = await this.mouseService.getByManufacturerCode(manufacturerCode);

    if (
      mouseById.manufacturerCode !== manufacturerCode &&
      mouseByManufacturerCode?.manufacturerCode === manufacturerCode
    )
      throw new ConflictException(
        `mouse already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.mouseService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const mouseById = await this.mouseService.getById(id);

    if (!mouseById) throw new BadRequestException(`mouse not found by id`);

    return this.mouseService.delete(id);
  }
}
