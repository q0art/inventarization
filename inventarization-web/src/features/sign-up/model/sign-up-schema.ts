import { EMAIL, PASSWORD } from "@shared/constants/inputs";
import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z
      .string()
      .refine((field) => field.trim().length > 0, {
        message: "email is required",
      })
      .refine((field) => field.trim().length >= EMAIL.MIN_LENGTH, {
        message: `email min length is ${EMAIL.MIN_LENGTH}`,
      })
      .refine((field) => field.trim().length <= EMAIL.MAX_LENGTH, {
        message: `email max length is ${EMAIL.MAX_LENGTH}`,
      })
      .refine((field) => EMAIL.REGEX.test(field.trim()), {
        message: "invalid format",
      }),
    password: z
      .string()
      .refine((field) => field.trim().length > 0, {
        message: "password is required",
      })
      .refine((field) => field.trim().length >= PASSWORD.MIN_LENGTH, {
        message: `password min length is ${PASSWORD.MIN_LENGTH}`,
      })
      .refine((field) => field.trim().length <= PASSWORD.MAX_LENGTH, {
        message: `password max length is ${PASSWORD.MAX_LENGTH}`,
      }),
    repeatPassword: z
      .string()
      .refine((field) => field.trim().length > 0, {
        message: "password is required",
      })
      .refine((field) => field.trim().length >= PASSWORD.MIN_LENGTH, {
        message: `password min length is ${PASSWORD.MIN_LENGTH}`,
      })
      .refine((field) => field.trim().length <= PASSWORD.MAX_LENGTH, {
        message: `password max length is ${PASSWORD.MAX_LENGTH}`,
      }),
  })
  .refine((fields) => fields.password === fields.repeatPassword, {
    message: "passwords not match",
    path: ["repeatPassword"],
  });
