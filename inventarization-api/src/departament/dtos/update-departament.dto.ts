import {
  SMALL_FIELD_MAX_LENGTH,
  SMALL_FIELD_MIN_LENGTH,
} from "@app/shared/constants";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class UpdateDepartamentDto {
  @IsEmail()
  @IsNotEmpty()
  @MinLength(SMALL_FIELD_MIN_LENGTH, {
    message: `departament name min length is ${SMALL_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(SMALL_FIELD_MAX_LENGTH, {
    message: `departament name max length is ${SMALL_FIELD_MAX_LENGTH}`,
  })
  name: string;
}
