import { CreateEmployeeDto, UpdateEmployeeDto } from "@employee/dtos";
import { EmployeeService } from "@employee/employee.service";
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

@Controller("employee")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get("")
  async getAllByEmail(@Query("email") email: string) {
    return await this.employeeService.getAllByEmail(email);
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const employeeById = await this.getById(id);

    if (!employeeById)
      throw new BadRequestException(`employee not found by id: ${id}`);

    return await this.employeeService.getById(id);
  }

  @Post("")
  async create(@Body() dto: CreateEmployeeDto) {
    const { email } = dto;

    const employeeByEmail = this.employeeService.getByEmail(email);

    if (employeeByEmail)
      throw new ConflictException(
        `employee already exist with email: ${email}`,
      );

    return await this.employeeService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateEmployeeDto) {
    const employeeById = await this.getById(id);

    if (!employeeById)
      throw new BadRequestException(`user not found by id: ${id}`);

    const { email } = dto;
    const employeeByEmail = await this.employeeService.getByEmail(email);

    if (employeeByEmail && employeeByEmail.email !== email)
      throw new ConflictException(
        `employee already exist with email: ${email}`,
      );

    return await this.employeeService.update(id, dto);
  }

  @Delete("id")
  async delete(@Param("id") id: string) {
    const employeeById = await this.employeeService.getById(id);

    if (!employeeById)
      throw new BadRequestException(`employee not found by id: ${id}`);

    return await this.employeeService.delete(id);
  }
}
