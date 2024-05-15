import { Controller } from "@nestjs/common";
import { KeyboardService } from "./keyboard.service";

@Controller("keyboard")
export class KeyboardController {
  constructor(private readonly keyboardService: KeyboardService) {}
}
