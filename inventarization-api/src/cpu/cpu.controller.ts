import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { CpuService } from "@cpu/cpu.service";
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

@Controller("cpu")
export class CpuController {
  constructor(private readonly cpuService: CpuService) {}

  @Get("")
  async getAllByModel(@Query("model") model: string) {
    return await this.cpuService.getAllByModel(model);
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const cpuById = await this.cpuService.getById(id);

    if (!cpuById) throw new BadRequestException(`cpu not found by id: ${id}`);

    return cpuById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const cpuByModel = await this.cpuService.getByModel(model);

    if (cpuByModel) throw new ConflictException(`cpu already exist with model: ${model}`);

    const cpuByManufacturerCode = await this.cpuService.getByManufacturerCode(manufacturerCode);

    if (cpuByManufacturerCode)
      throw new ConflictException(`cpu already exist with manufacturer code: ${manufacturerCode}`);

    return await this.cpuService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const cpuById = await this.cpuService.getById(id);

    if (!cpuById) throw new BadRequestException(`cpu not found by id`);

    const { model, manufacturerCode } = dto;
    const cpuByModel = await this.cpuService.getByModel(model);

    if (cpuByModel) throw new ConflictException(`cpu already exist with model: ${model}`);

    const cpuByManufacturerCode = await this.cpuService.getByManufacturerCode(manufacturerCode);

    if (cpuByManufacturerCode)
      throw new ConflictException(`cpu already exist with manufacturer code: ${manufacturerCode}`);

    return await this.cpuService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const cpuById = await this.cpuService.getById(id);

    if (!cpuById) throw new BadRequestException(`cpu not found by id`);

    return this.cpuService.delete(id);
  }
}
