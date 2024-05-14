import { Module } from '@nestjs/common';
import { SsdService } from './ssd.service';
import { SsdController } from './ssd.controller';

@Module({
  controllers: [SsdController],
  providers: [SsdService],
})
export class SsdModule {}
