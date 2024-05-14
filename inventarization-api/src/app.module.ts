import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { CookieModule } from './cookie/cookie.module';
import { DepartamentModule } from './departament/departament.module';
import { EmployeeModule } from './employee/employee.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { BrandModule } from './brand/brand.module';
import { CpuModule } from './cpu/cpu.module';
import { GpuModule } from './gpu/gpu.module';
import { RamModule } from './ram/ram.module';
import { SsdModule } from './ssd/ssd.module';
import { MotherboardModule } from './motherboard/motherboard.module';
import { CaseModule } from './case/case.module';
import { CoolerModule } from './cooler/cooler.module';
import { DesktopModule } from './desktop/desktop.module';
import { LaptopModule } from './laptop/laptop.module';
import { MonitorModule } from './monitor/monitor.module';
import { MouseModule } from './mouse/mouse.module';
import { MousepadModule } from './mousepad/mousepad.module';
import { KeyboardModule } from './keyboard/keyboard.module';
import { HeadphoneModule } from './headphone/headphone.module';

@Module({
  imports: [UserModule, PrismaModule, AuthModule, TokenModule, CookieModule, DepartamentModule, EmployeeModule, WorkspaceModule, BrandModule, CpuModule, GpuModule, RamModule, SsdModule, MotherboardModule, CaseModule, CoolerModule, DesktopModule, LaptopModule, MonitorModule, MouseModule, MousepadModule, KeyboardModule, HeadphoneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
