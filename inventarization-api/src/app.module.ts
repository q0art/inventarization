import { AuthService } from "@auth/auth.service";
import { JwtGuard } from "@auth/guards";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";

import { AuthModule } from "./auth/auth.module";
import { BrandModule } from "./brand/brand.module";
import { CaseModule } from "./case/case.module";
import { CoolerModule } from "./cooler/cooler.module";
import { CpuModule } from "./cpu/cpu.module";
import { DepartamentModule } from "./departament/departament.module";
import { DesktopModule } from "./desktop/desktop.module";
import { EmployeeModule } from "./employee/employee.module";
import { GpuModule } from "./gpu/gpu.module";
import { HeadphoneModule } from "./headphone/headphone.module";
import { KeyboardModule } from "./keyboard/keyboard.module";
import { LaptopModule } from "./laptop/laptop.module";
import { MonitorModule } from "./monitor/monitor.module";
import { MotherboardModule } from "./motherboard/motherboard.module";
import { MouseModule } from "./mouse/mouse.module";
import { MousepadModule } from "./mousepad/mousepad.module";
import { PrismaModule } from "./prisma/prisma.module";
import { RamModule } from "./ram/ram.module";
import { SsdModule } from "./ssd/ssd.module";
import { UserModule } from "./user/user.module";
// import { WorkspaceModule } from "./workspace/workspace.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule,
    UserModule,
    PrismaModule,
    AuthModule,
    DepartamentModule,
    EmployeeModule,
    // WorkspaceModule,
    BrandModule,
    CpuModule,
    GpuModule,
    RamModule,
    SsdModule,
    MotherboardModule,
    CaseModule,
    CoolerModule,
    DesktopModule,
    LaptopModule,
    MonitorModule,
    MouseModule,
    MousepadModule,
    KeyboardModule,
    HeadphoneModule,
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class AppModule {}
