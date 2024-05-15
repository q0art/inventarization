import { Controller } from "@nestjs/common";
import { DesktopService } from "./desktop.service";

@Controller("desktop")
export class DesktopController {
  constructor(private readonly desktopService: DesktopService) {}
}
