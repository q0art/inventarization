import { Module } from '@nestjs/common';
import { MousepadService } from './mousepad.service';
import { MousepadController } from './mousepad.controller';

@Module({
  controllers: [MousepadController],
  providers: [MousepadService],
})
export class MousepadModule {}
