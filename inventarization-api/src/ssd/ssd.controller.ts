import { Controller } from '@nestjs/common';
import { SsdService } from './ssd.service';

@Controller('ssd')
export class SsdController {
  constructor(private readonly ssdService: SsdService) {}
}
