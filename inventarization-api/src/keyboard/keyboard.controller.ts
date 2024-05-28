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
import { KeyboardService } from "src/keyboard/keyboard.service";

@Controller("keyboard")
export class KeyboardController {
  constructor(private readonly keyboardService: KeyboardService) {}

  @Get("")
  async getAll() {
    return await this.keyboardService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const keyboardById = await this.keyboardService.getById(id);

    if (!keyboardById) throw new BadRequestException(`keyboard not found by id: ${id}`);

    return keyboardById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const keyboardByModel = await this.keyboardService.getByModel(model);

    if (keyboardByModel) throw new ConflictException(`keyboard already exist with model: ${model}`);

    const keyboardByManufacturerCode =
      await this.keyboardService.getByManufacturerCode(manufacturerCode);

    if (keyboardByManufacturerCode)
      throw new ConflictException(
        `keyboard already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.keyboardService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const keyboardById = await this.keyboardService.getById(id);

    if (!keyboardById) throw new BadRequestException(`keyboard not found by id`);

    const { model, manufacturerCode } = dto;

    const keyboardByModel = await this.keyboardService.getByModel(model);

    if (keyboardByModel && keyboardByModel.model !== model)
      throw new ConflictException(`keyboard already exist with model: ${model}`);

    const keyboardByManufacturerCode =
      await this.keyboardService.getByManufacturerCode(manufacturerCode);

    if (
      keyboardByManufacturerCode &&
      keyboardByManufacturerCode.manufacturerCode !== dto.manufacturerCode
    )
      throw new ConflictException(
        `keyboard already exist with manufacturer code: ${manufacturerCode}`,
      );

    return await this.keyboardService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const keyboardById = await this.keyboardService.getById(id);

    if (!keyboardById) throw new BadRequestException(`keyboard not found by id`);

    return this.keyboardService.delete(id);
  }
}
