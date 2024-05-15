import { Module } from "@nestjs/common";
import { HeadphoneService } from "./headphone.service";
import { HeadphoneController } from "./headphone.controller";

@Module({
  controllers: [HeadphoneController],
  providers: [HeadphoneService],
})
export class HeadphoneModule {}
