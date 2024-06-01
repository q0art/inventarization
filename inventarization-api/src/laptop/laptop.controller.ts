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
import { LaptopService } from "src/laptop/laptop.service";

@Controller("laptop")
export class LaptopController {
  constructor(private readonly laptopService: LaptopService) {}

  @Get("")
  async getAll() {
    return await this.laptopService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const laptopById = await this.laptopService.getById(id);

    if (!laptopById) throw new BadRequestException(`laptop not found by id: ${id}`);

    return laptopById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const laptopByModel = await this.laptopService.getByModel(model);

    if (laptopByModel) throw new ConflictException(`laptop already exist with model: ${model}`);

    const laptopByManufacturerCode =
      await this.laptopService.getByManufacturerCode(manufacturerCode);

    if (laptopByManufacturerCode)
      throw new ConflictException(
        `laptop already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.laptopService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const laptopById = await this.laptopService.getById(id);

    if (!laptopById) throw new BadRequestException(`laptop not found by id`);

    const { model, manufacturerCode } = dto;

    const laptopByModel = await this.laptopService.getByModel(model);

    if (laptopById.model !== model && laptopByModel?.model === model)
      throw new ConflictException(`laptop already exist with model: ${model}`);

    const laptopByManufacturerCode =
      await this.laptopService.getByManufacturerCode(manufacturerCode);

    if (
      laptopById.manufacturerCode !== manufacturerCode &&
      laptopByManufacturerCode?.manufacturerCode === manufacturerCode
    )
      throw new ConflictException(
        `laptop already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.laptopService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const laptopById = await this.laptopService.getById(id);

    if (!laptopById) throw new BadRequestException(`laptop not found by id`);

    return this.laptopService.delete(id);
  }
}
