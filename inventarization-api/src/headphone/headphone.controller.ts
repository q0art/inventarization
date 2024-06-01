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
import { HeadphoneService } from "src/headphone/headphone.service";

@Controller("headphone")
export class HeadphoneController {
  constructor(private readonly headphoneService: HeadphoneService) {}

  @Get("")
  async getAll() {
    return await this.headphoneService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const headphoneById = await this.headphoneService.getById(id);

    if (!headphoneById) throw new BadRequestException(`headphone not found by id: ${id}`);

    return headphoneById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const headphoneByModel = await this.headphoneService.getByModel(model);

    if (headphoneByModel)
      throw new ConflictException(`headphone already exist with model: ${model}`);

    const headphoneByManufacturerCode =
      await this.headphoneService.getByManufacturerCode(manufacturerCode);

    if (headphoneByManufacturerCode)
      throw new ConflictException(
        `headphone already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.headphoneService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const headphoneById = await this.headphoneService.getById(id);

    if (!headphoneById) throw new BadRequestException(`headphone not found by id`);

    const { model, manufacturerCode } = dto;

    const headphoneByModel = await this.headphoneService.getByModel(model);

    if (headphoneById.model !== model && headphoneByModel?.model === model)
      throw new ConflictException(`headphone already exist with model: ${model}`);

    const headphoneByManufacturerCode =
      await this.headphoneService.getByManufacturerCode(manufacturerCode);

    if (
      headphoneById.manufacturerCode !== manufacturerCode &&
      headphoneByManufacturerCode?.manufacturerCode === manufacturerCode
    )
      throw new ConflictException(
        `headphone already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.headphoneService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const headphoneById = await this.headphoneService.getById(id);

    if (!headphoneById) throw new BadRequestException(`headphone not found by id`);

    return this.headphoneService.delete(id);
  }
}
