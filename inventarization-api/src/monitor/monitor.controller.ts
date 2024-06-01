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
import { MonitorService } from "src/monitor/monitor.service";

@Controller("monitor")
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @Get("")
  async getAll() {
    return await this.monitorService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const monitorById = await this.monitorService.getById(id);

    if (!monitorById) throw new BadRequestException(`monitor not found by id: ${id}`);

    return monitorById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const monitorByModel = await this.monitorService.getByModel(model);

    if (monitorByModel) throw new ConflictException(`monitor already exist with model: ${model}`);

    const monitorByManufacturerCode =
      await this.monitorService.getByManufacturerCode(manufacturerCode);

    if (monitorByManufacturerCode)
      throw new ConflictException(
        `monitor already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.monitorService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const monitorById = await this.monitorService.getById(id);

    if (!monitorById) throw new BadRequestException(`monitor not found by id`);

    const { model, manufacturerCode } = dto;

    const monitorByModel = await this.monitorService.getByModel(model);

    if (monitorById.model !== model && monitorByModel?.model === model)
      throw new ConflictException(`monitor already exist with model: ${model}`);

    const monitorByManufacturerCode =
      await this.monitorService.getByManufacturerCode(manufacturerCode);

    if (
      monitorById.manufacturerCode !== manufacturerCode &&
      monitorByManufacturerCode?.manufacturerCode === manufacturerCode
    )
      throw new ConflictException(
        `monitor already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.monitorService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const monitorById = await this.monitorService.getById(id);

    if (!monitorById) throw new BadRequestException(`monitor not found by id`);

    return this.monitorService.delete(id);
  }
}
