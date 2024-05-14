import { Controller } from '@nestjs/common';
import { HeadphoneService } from './headphone.service';

@Controller('headphone')
export class HeadphoneController {
  constructor(private readonly headphoneService: HeadphoneService) {}
}
