import { SMALL_FIELD_MAX_LENGTH, SMALL_FIELD_MIN_LENGTH } from "@app/shared/constants";
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateItemDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  brandId?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(SMALL_FIELD_MIN_LENGTH, {
    message: `item model min length is ${SMALL_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(SMALL_FIELD_MAX_LENGTH, {
    message: `item model max length is ${SMALL_FIELD_MAX_LENGTH}`,
  })
  model?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(SMALL_FIELD_MIN_LENGTH, {
    message: `item manufacturer code min length is ${SMALL_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(SMALL_FIELD_MAX_LENGTH, {
    message: `item manufacturer code max length is ${SMALL_FIELD_MAX_LENGTH}`,
  })
  manufacturerCode?: string;
}
