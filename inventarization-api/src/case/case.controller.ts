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

import { CaseService } from "./case.service";

@Controller("case")
export class CaseController {
  constructor(private readonly caseService: CaseService) {}

  @Get("")
  async getAllByModel() {
    return await this.caseService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const caseById = await this.caseService.getById(id);

    if (!caseById) throw new BadRequestException(`case not found by id: ${id}`);

    return caseById;
  }

  @Post("")
  async create(@Body() dto: CreateItemDto) {
    const { model, manufacturerCode } = dto;
    const caseByModel = await this.caseService.getByModel(model);

    if (caseByModel) throw new ConflictException(`case already exist with model: ${model}`);

    const caseByManufacturerCode = await this.caseService.getByManufacturerCode(manufacturerCode);

    if (caseByManufacturerCode)
      throw new ConflictException(`case already exist with manufacturer code: ${manufacturerCode}`);

    return await this.caseService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateItemDto) {
    const caseById = await this.caseService.getById(id);

    if (!caseById) throw new BadRequestException(`case not found by id`);

    const { model, manufacturerCode } = dto;
    const caseByModel = await this.caseService.getByModel(model);

    if (caseByModel && caseByModel.model !== dto.model)
      throw new ConflictException(`case already exist with model: ${model}`);

    const caseByManufacturerCode = await this.caseService.getByManufacturerCode(manufacturerCode);

    if (caseByManufacturerCode && caseByManufacturerCode.manufacturerCode !== dto.manufacturerCode)
      throw new ConflictException(`case already exist with manufacturer code: ${manufacturerCode}`);

    return await this.caseService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const caseById = await this.caseService.getById(id);

    if (!caseById) throw new BadRequestException(`case not found by id`);

    return this.caseService.delete(id);
  }
}
