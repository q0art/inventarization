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
import { CoolerService } from "src/cooler/cooler.service";

@Controller("cooler")
export class CoolerController {
  constructor(private readonly coolerService: CoolerService) {}

  @Get("")
  async getAll() {
    return await this.coolerService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const coolerById = await this.coolerService.getById(id);

    if (!coolerById) throw new BadRequestException(`cooler not found by id: ${id}`);

    return coolerById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const coolerByModel = await this.coolerService.getByModel(model);

    if (coolerByModel) throw new ConflictException(`cooler already exist with model: ${model}`);

    const coolerByManufacturerCode =
      await this.coolerService.getByManufacturerCode(manufacturerCode);

    if (coolerByManufacturerCode)
      throw new ConflictException(
        `cooler already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.coolerService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const coolerById = await this.coolerService.getById(id);

    if (!coolerById) throw new BadRequestException(`cooler not found by id`);

    const { model, manufacturerCode } = dto;

    const coolerByModel = await this.coolerService.getByModel(model);

    if (coolerById.model !== model && coolerByModel?.model === model)
      throw new ConflictException(`cooler already exist with model: ${model}`);

    const coolerByManufacturerCode =
      await this.coolerService.getByManufacturerCode(manufacturerCode);

    if (
      coolerById.manufacturerCode !== manufacturerCode &&
      coolerByManufacturerCode?.manufacturerCode === manufacturerCode
    )
      throw new ConflictException(
        `cooler already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.coolerService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const coolerById = await this.coolerService.getById(id);

    if (!coolerById) throw new BadRequestException(`cooler not found by id`);

    return this.coolerService.delete(id);
  }
}
