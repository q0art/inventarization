import { DepartamentService } from "@departament/departament.service";
import { CreateDepartamentDto, UpdateDepartamentDto } from "@departament/dtos";
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

@Controller("departament")
export class DepartamentController {
  constructor(private readonly departamentService: DepartamentService) {}

  @Get("")
  async getAllByName(@Query("name") name: string) {
    return await this.departamentService.getAllByName(name);
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const departamentById = await this.departamentService.getById(id);

    if (!departamentById)
      throw new BadRequestException(`departament not found by id: ${id}`);

    return await this.departamentService.getById(id);
  }

  @Post("")
  async create(@Body() dto: CreateDepartamentDto) {
    const { name } = dto;
    const departamentByName = await this.departamentService.getByName(name);

    if (departamentByName)
      throw new ConflictException(
        `departamnet already exist with name: ${name}`,
      );

    return await this.departamentService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateDepartamentDto) {
    const departamentById = await this.departamentService.getById(id);

    if (!departamentById)
      throw new BadRequestException(`departament not found by id: ${id}`);

    const { name } = dto;
    const departamentByName = await this.departamentService.getByName(name);

    if (departamentByName)
      throw new ConflictException(
        `departamnet already exist with name: ${name}`,
      );

    return await this.departamentService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    const departamentById = await this.departamentService.getById(id);

    if (!departamentById)
      throw new BadRequestException(`departament not found by id: ${id}`);

    return await this.departamentService.delete(id);
  }
}
