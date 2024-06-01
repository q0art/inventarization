import { BrandService } from "@brand/brand.service";
import { CreateBrandDto, UpdateBrandDto } from "@brand/dtos";
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

@Controller("brand")
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get("")
  async getAllByName() {
    return await this.brandService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const brandById = await this.brandService.getById(id);

    if (!brandById) throw new BadRequestException(`brand not found by id: ${id}`);

    return brandById;
  }

  @Post("")
  async create(@Body() dto: CreateBrandDto) {
    const { name } = dto;
    const brandByName = await this.brandService.getByName(name);

    if (brandByName) throw new ConflictException(`brand already exist with name: ${name}`);

    return await this.brandService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateBrandDto) {
    const brandById = await this.getById(id);

    if (!brandById) throw new BadRequestException(`brand not found by id: ${id}`);

    const { name } = dto;
    const brandByName = await this.brandService.getByName(name);

    if (brandById.name !== name && brandByName?.name === name)
      throw new ConflictException(`brand already exist with name: ${name}`);

    return await this.brandService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const departamentById = await this.brandService.getById(id);

    if (!departamentById) throw new BadRequestException(`brand not found by id: ${id}`);

    return await this.brandService.delete(id);
  }
}
