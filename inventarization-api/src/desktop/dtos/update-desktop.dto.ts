import { SMALL_FIELD_MAX_LENGTH, SMALL_FIELD_MIN_LENGTH } from "@app/shared/constants";
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateDesktopDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(SMALL_FIELD_MIN_LENGTH, {
    message: `desktop name min length is ${SMALL_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(SMALL_FIELD_MAX_LENGTH, {
    message: `desktop name max length is ${SMALL_FIELD_MAX_LENGTH}`,
  })
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  cpuId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  gpuId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  ramId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  ssdId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  motherboardId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  caseId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  coolerId: string;
}
