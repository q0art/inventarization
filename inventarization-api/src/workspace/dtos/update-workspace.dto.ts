import { SMALL_FIELD_MAX_LENGTH, SMALL_FIELD_MIN_LENGTH } from "@app/shared/constants";
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateWorkspaceDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(SMALL_FIELD_MIN_LENGTH, {
    message: `workspace name min length is ${SMALL_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(SMALL_FIELD_MAX_LENGTH, {
    message: `workspace name max length is ${SMALL_FIELD_MAX_LENGTH}`,
  })
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  monitorId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  desktopId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  laptopId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  mouseId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  mousepadId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  keyboardId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  headphoneId: string;
}
