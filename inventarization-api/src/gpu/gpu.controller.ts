import { CreateItemDto, UpdateItemDto } from "@app/shared/types";
import { GpuService } from "@gpu/gpu.service";
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

@Controller("gpu")
export class GpuController {
  constructor(private readonly gpuService: GpuService) {}

  @Get("")
  async getAllByModel() {
    return await this.gpuService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const gpuById = await this.gpuService.getById(id);

    if (!gpuById) throw new BadRequestException(`gpu not found by id: ${id}`);

    return gpuById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const gpuByModel = await this.gpuService.getByModel(model);

    if (gpuByModel) throw new ConflictException(`gpu already exist with model: ${model}`);

    const gpuByManufacturerCode = await this.gpuService.getByManufacturerCode(manufacturerCode);

    if (gpuByManufacturerCode)
      throw new ConflictException(`gpu already exist with manufacturer code: ${manufacturerCode}`);

    return await this.gpuService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const gpuById = await this.gpuService.getById(id);

    if (!gpuById) throw new BadRequestException(`gpu not found by id`);

    const { model, manufacturerCode } = dto;
    const gpuByModel = await this.gpuService.getByModel(model);

    if (gpuByModel && gpuByModel.model !== dto.model)
      throw new ConflictException(`gpu already exist with model: ${model}`);

    const gpuByManufacturerCode = await this.gpuService.getByManufacturerCode(manufacturerCode);

    if (gpuByManufacturerCode && gpuByManufacturerCode.manufacturerCode !== dto.manufacturerCode)
      throw new ConflictException(`gpu already exist with manufacturer code: ${manufacturerCode}`);

    return await this.gpuService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const gpuById = await this.gpuService.getById(id);

    if (!gpuById) throw new BadRequestException(`gpu not found by id`);

    return this.gpuService.delete(id);
  }
}
