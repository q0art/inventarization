import { Controller } from '@nestjs/common';
import { MotherboardService } from './motherboard.service';

@Controller('motherboard')
export class MotherboardController {
  constructor(private readonly motherboardService: MotherboardService) {}
}
