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
import { MousepadService } from "src/mousepad/mousepad.service";

@Controller("mousepad")
export class MousepadController {
  constructor(private readonly mousepadService: MousepadService) {}

  @Get("")
  async getAll() {
    return await this.mousepadService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const mousepadById = await this.mousepadService.getById(id);

    if (!mousepadById) throw new BadRequestException(`mousepad not found by id: ${id}`);

    return mousepadById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const mousepadByModel = await this.mousepadService.getByModel(model);

    if (mousepadByModel) throw new ConflictException(`mousepad already exist with model: ${model}`);

    const mousepadByManufacturerCode =
      await this.mousepadService.getByManufacturerCode(manufacturerCode);

    if (mousepadByManufacturerCode)
      throw new ConflictException(
        `mousepad already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.mousepadService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const mousepadById = await this.mousepadService.getById(id);

    if (!mousepadById) throw new BadRequestException(`mousepad not found by id`);

    const { model, manufacturerCode } = dto;

    const mousepadByModel = await this.mousepadService.getByModel(model);

    if (mousepadByModel && mousepadByModel.model !== model)
      throw new ConflictException(`mousepad already exist with model: ${model}`);

    const mousepadByManufacturerCode =
      await this.mousepadService.getByManufacturerCode(manufacturerCode);

    if (
      mousepadByManufacturerCode &&
      mousepadByManufacturerCode.manufacturerCode !== dto.manufacturerCode
    )
      throw new ConflictException(
        `mousepad already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.mousepadService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const mousepadById = await this.mousepadService.getById(id);

    if (!mousepadById) throw new BadRequestException(`mousepad not found by id`);

    return this.mousepadService.delete(id);
  }
}
