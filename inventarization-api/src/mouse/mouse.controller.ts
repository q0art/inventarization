import { Controller } from '@nestjs/common';
import { MouseService } from './mouse.service';

@Controller('mouse')
export class MouseController {
  constructor(private readonly mouseService: MouseService) {}
}
