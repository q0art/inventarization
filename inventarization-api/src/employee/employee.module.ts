import { EmployeeController } from "@employee/employee.controller";
import { EmployeeService } from "@employee/employee.service";
import { Module } from "@nestjs/common";
import { UserModule } from "@user/user.module";

@Module({
  imports: [UserModule],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
