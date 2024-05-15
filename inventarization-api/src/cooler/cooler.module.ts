import { Module } from "@nestjs/common";
import { CoolerService } from "./cooler.service";
import { CoolerController } from "./cooler.controller";

@Module({
  controllers: [CoolerController],
  providers: [CoolerService],
})
export class CoolerModule {}
