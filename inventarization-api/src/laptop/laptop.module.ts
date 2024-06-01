import { Module } from "@nestjs/common";

import { LaptopController } from "./laptop.controller";
import { LaptopService } from "./laptop.service";

@Module({
  controllers: [LaptopController],
  providers: [LaptopService],
})
export class LaptopModule {}
