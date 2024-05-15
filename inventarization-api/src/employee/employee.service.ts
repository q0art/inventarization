import { CreateEmployeeDto, UpdateEmployeeDto } from "@employee/dtos";
import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import { Employee } from "@prisma/client";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class EmployeeService {
  private logger = new Logger(EmployeeService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async getAllByEmail(email: string) {
    const employees: Employee[] = await this.prismaService.employee
      .findMany({
        where: {
          email: {
            contains: email,
            mode: "insensitive",
          },
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return [];
      });

    return employees;
  }

  async getById(id: string) {
    const employee: Employee = await this.prismaService.employee
      .findUnique({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return employee;
  }

  async getByEmail(email: string) {
    const employee: Employee = await this.prismaService.employee
      .findUnique({
        where: { email },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return employee;
  }

  async create(dto: CreateEmployeeDto) {
    const employee: Employee = await this.prismaService.employee
      .create({
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return employee;
  }

  async update(id: string, dto: UpdateEmployeeDto) {
    const employee: Employee = await this.prismaService.employee
      .update({
        where: { id },
        data: {
          ...dto,
        },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return employee;
  }

  async delete(id: string) {
    const employee: Employee = await this.prismaService.employee
      .delete({
        where: { id },
      })
      .catch((error) => {
        this.logger.error(error);
        return null;
      });

    return employee;
  }
}
