import { Controller } from '@nestjs/common';
import { CoolerService } from './cooler.service';

@Controller('cooler')
export class CoolerController {
  constructor(private readonly coolerService: CoolerService) {}
}
