import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  LARGE_FIELD_MAX_LENGTH,
  LARGE_FIELD_MIN_LENGTH,
  SMALL_FIELD_MAX_LENGTH,
  SMALL_FIELD_MIN_LENGTH,
} from "@app/shared/constants";
import { Grade } from "@prisma/client";
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(SMALL_FIELD_MIN_LENGTH, {
    message: `employee first name min length is ${SMALL_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(SMALL_FIELD_MAX_LENGTH, {
    message: `employee first name max length is ${SMALL_FIELD_MAX_LENGTH}`,
  })
  firstName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(SMALL_FIELD_MIN_LENGTH, {
    message: `employee last name min length is ${SMALL_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(SMALL_FIELD_MAX_LENGTH, {
    message: `employee last name max length is ${SMALL_FIELD_MAX_LENGTH}`,
  })
  lastName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(SMALL_FIELD_MIN_LENGTH, {
    message: `employee middle name min length is ${SMALL_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(SMALL_FIELD_MAX_LENGTH, {
    message: `employee middle name max length is ${SMALL_FIELD_MAX_LENGTH}`,
  })
  middleName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(EMAIL_MIN_LENGTH, {
    message: `employee email min length is ${EMAIL_MIN_LENGTH}`,
  })
  @MaxLength(EMAIL_MAX_LENGTH, {
    message: `employee email max length is ${EMAIL_MAX_LENGTH}`,
  })
  email?: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  grade?: Grade;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(LARGE_FIELD_MIN_LENGTH, {
    message: `skills text-block min length is ${LARGE_FIELD_MIN_LENGTH}`,
  })
  @MaxLength(LARGE_FIELD_MAX_LENGTH, {
    message: `skills text-block max length is ${LARGE_FIELD_MAX_LENGTH}`,
  })
  skills?: string;

  @IsString()
  @IsNotEmpty()
  departamentId: string;

  @IsString()
  @IsNotEmpty()
  workspaceId: string;
}
