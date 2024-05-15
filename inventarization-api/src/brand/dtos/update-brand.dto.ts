import { SMALL_FIELD_MAX_LENGTH, SMALL_FIELD_MIN_LENGTH } from "@app/shared/constants";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateBrandDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(SMALL_FIELD_MIN_LENGTH, {
    message: `brand name min length is ${SMALL_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(SMALL_FIELD_MAX_LENGTH, {
    message: `brand name max length is ${SMALL_FIELD_MAX_LENGTH}`,
  })
  name: string;
}
