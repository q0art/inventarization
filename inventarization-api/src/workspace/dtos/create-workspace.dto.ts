import { SMALL_FIELD_MAX_LENGTH, SMALL_FIELD_MIN_LENGTH } from "@app/shared/constants";
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateWorkspaceDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(SMALL_FIELD_MIN_LENGTH, {
    message: `workspace name min length is ${SMALL_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(SMALL_FIELD_MAX_LENGTH, {
    message: `workspace name max length is ${SMALL_FIELD_MAX_LENGTH}`,
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  monitorId: string;

  @IsString()
  @IsNotEmpty()
  desktopId: string;

  @IsString()
  @IsNotEmpty()
  laptopId: string;

  @IsString()
  @IsNotEmpty()
  mouseId: string;

  @IsString()
  @IsNotEmpty()
  mousepadId: string;

  @IsString()
  @IsNotEmpty()
  keyboardId: string;

  @IsString()
  @IsNotEmpty()
  headphoneId: string;
}
