import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from "@app/shared/constants";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MinLength(EMAIL_MIN_LENGTH, {
    message: `user email min length is ${EMAIL_MIN_LENGTH}`,
  })
  @MaxLength(EMAIL_MAX_LENGTH, {
    message: `user email max length is ${EMAIL_MAX_LENGTH}`,
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(PASSWORD_MIN_LENGTH, {
    message: `user password min length is ${PASSWORD_MIN_LENGTH}`,
  })
  @MaxLength(PASSWORD_MAX_LENGTH, {
    message: `user password max length is ${PASSWORD_MAX_LENGTH}`,
  })
  password: string;
}
