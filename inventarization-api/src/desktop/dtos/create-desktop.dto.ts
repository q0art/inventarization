import { SMALL_FIELD_MAX_LENGTH, SMALL_FIELD_MIN_LENGTH } from "@app/shared/constants";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateDesktopDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(SMALL_FIELD_MIN_LENGTH, {
    message: `desktop name min length is ${SMALL_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(SMALL_FIELD_MAX_LENGTH, {
    message: `desktop name max length is ${SMALL_FIELD_MAX_LENGTH}`,
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  cpuId: string;

  @IsString()
  @IsNotEmpty()
  gpuId: string;

  @IsString()
  @IsNotEmpty()
  ramId: string;

  @IsString()
  @IsNotEmpty()
  ssdId: string;

  @IsString()
  @IsNotEmpty()
  motherboardId: string;

  @IsString()
  @IsNotEmpty()
  caseId: string;

  @IsString()
  @IsNotEmpty()
  coolerId: string;
}
