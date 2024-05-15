import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateWorkspaceDto {
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
