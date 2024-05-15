import { Controller } from "@nestjs/common";
import { LaptopService } from "./laptop.service";

@Controller("laptop")
export class LaptopController {
  constructor(private readonly laptopService: LaptopService) {}
}
