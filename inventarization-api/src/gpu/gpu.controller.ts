import { Controller } from '@nestjs/common';
import { GpuService } from './gpu.service';

@Controller('gpu')
export class GpuController {
  constructor(private readonly gpuService: GpuService) {}
}
