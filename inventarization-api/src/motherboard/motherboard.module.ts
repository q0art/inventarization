import { Module } from '@nestjs/common';
import { MotherboardService } from './motherboard.service';
import { MotherboardController } from './motherboard.controller';

@Module({
  controllers: [MotherboardController],
  providers: [MotherboardService],
})
export class MotherboardModule {}
