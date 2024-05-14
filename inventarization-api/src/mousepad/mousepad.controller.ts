import { Controller } from '@nestjs/common';
import { MousepadService } from './mousepad.service';

@Controller('mousepad')
export class MousepadController {
  constructor(private readonly mousepadService: MousepadService) {}
}
