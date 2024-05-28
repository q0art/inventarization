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

import { MotherboardService } from "./motherboard.service";

@Controller("motherboard")
export class MotherboardController {
  constructor(private readonly motherboardService: MotherboardService) {}

  @Get("")
  async getAllByModel() {
    return await this.motherboardService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const motherboardById = await this.motherboardService.getById(id);

    if (!motherboardById) throw new BadRequestException(`motherboard not found by id: ${id}`);

    return motherboardById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const motherboardByModel = await this.motherboardService.getByModel(model);

    if (motherboardByModel)
      throw new ConflictException(`motherboard already exist with model: ${model}`);

    const motherboardByManufacturerCode =
      await this.motherboardService.getByManufacturerCode(manufacturerCode);

    if (motherboardByManufacturerCode)
      throw new ConflictException(
        `motherboard already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.motherboardService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const motherboardById = await this.motherboardService.getById(id);

    if (!motherboardById) throw new BadRequestException(`motherboard not found by id`);

    const { model, manufacturerCode } = dto;
    const motherboardByModel = await this.motherboardService.getByModel(model);

    if (motherboardByModel && motherboardByModel.model !== dto.model)
      throw new ConflictException(`motherboard already exist with model: ${model}`);

    const motherboardByManufacturerCode =
      await this.motherboardService.getByManufacturerCode(manufacturerCode);

    if (
      motherboardByManufacturerCode &&
      motherboardByManufacturerCode.manufacturerCode !== dto.manufacturerCode
    )
      throw new ConflictException(
        `motherboard already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.motherboardService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const motherboardById = await this.motherboardService.getById(id);

    if (!motherboardById) throw new BadRequestException(`motherboard not found by id`);

    return this.motherboardService.delete(id);
  }
}
