import { Module } from "@nestjs/common";

import { MousepadController } from "./mousepad.controller";
import { MousepadService } from "./mousepad.service";

@Module({
  controllers: [MousepadController],
  providers: [MousepadService],
})
export class MousepadModule {}
