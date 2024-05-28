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
import { SsdService } from "@ssd/ssd.service";

@Controller("ssd")
export class SsdController {
  constructor(private readonly ssdService: SsdService) {}

  @Get("")
  async getAllByModel() {
    return await this.ssdService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const ssdById = await this.ssdService.getById(id);

    if (!ssdById) throw new BadRequestException(`ssd not found by id: ${id}`);

    return ssdById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const ssdByModel = await this.ssdService.getByModel(model);

    if (ssdByModel) throw new ConflictException(`ssd already exist with model: ${model}`);

    const ssdByManufacturerCode = await this.ssdService.getByManufacturerCode(manufacturerCode);

    if (ssdByManufacturerCode)
      throw new ConflictException(`ssd already exist with manufacturer code: ${manufacturerCode}`);

    return await this.ssdService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const ssdById = await this.ssdService.getById(id);

    if (!ssdById) throw new BadRequestException(`ssd not found by id`);

    const { model, manufacturerCode } = dto;
    const ssdByModel = await this.ssdService.getByModel(model);

    if (ssdByModel && ssdByModel.model !== dto.model)
      throw new ConflictException(`ssd already exist with model: ${model}`);

    const ssdByManufacturerCode = await this.ssdService.getByManufacturerCode(manufacturerCode);

    if (ssdByManufacturerCode && ssdByManufacturerCode.manufacturerCode !== dto.manufacturerCode)
      throw new ConflictException(`ssd already exist with manufacturer code: ${manufacturerCode}`);

    return await this.ssdService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const ssdById = await this.ssdService.getById(id);

    if (!ssdById) throw new BadRequestException(`ssd not found by id`);

    return this.ssdService.delete(id);
  }
}
