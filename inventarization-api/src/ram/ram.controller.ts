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
  Query,
} from "@nestjs/common";
import { RamService } from "@ram/ram.service";

@Controller("ram")
export class RamController {
  constructor(private readonly ramService: RamService) {}

  @Get("")
  async getAllByModel(@Query("model") model: string) {
    return await this.ramService.getAllByModel(model);
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const ramById = await this.ramService.getById(id);

    if (!ramById) throw new BadRequestException(`ram not found by id: ${id}`);

    return ramById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const ramByModel = await this.ramService.getByModel(model);

    if (ramByModel) throw new ConflictException(`ram already exist with model: ${model}`);

    const ramByManufacturerCode = await this.ramService.getByManufacturerCode(manufacturerCode);

    if (ramByManufacturerCode)
      throw new ConflictException(`ram already exist with manufacturer code: ${manufacturerCode}`);

    return await this.ramService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const ramById = await this.ramService.getById(id);

    if (!ramById) throw new BadRequestException(`ram not found by id`);

    const { model, manufacturerCode } = dto;
    const ramByModel = await this.ramService.getByModel(model);

    if (ramByModel) throw new ConflictException(`ram already exist with model: ${model}`);

    const ramByManufacturerCode = await this.ramService.getByManufacturerCode(manufacturerCode);

    if (ramByManufacturerCode)
      throw new ConflictException(`ram already exist with manufacturer code: ${manufacturerCode}`);

    return await this.ramService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const ramById = await this.ramService.getById(id);

    if (!ramById) throw new BadRequestException(`ram not found by id`);

    return this.ramService.delete(id);
  }
}
