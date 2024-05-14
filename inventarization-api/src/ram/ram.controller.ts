import { Controller } from '@nestjs/common';
import { RamService } from './ram.service';

@Controller('ram')
export class RamController {
  constructor(private readonly ramService: RamService) {}
}
