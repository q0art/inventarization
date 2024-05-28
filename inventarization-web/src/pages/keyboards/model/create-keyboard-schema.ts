import { z } from "zod";

import {
  SMALL_FIELD_MAX_LENGTH,
  SMALL_FIELD_MIN_LENGTH,
} from "@/shared/constants.ts";

export const CreateKeyboardSchema = z.object({
  model: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "keyboard model is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `keyboard model min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `keyboard model max length is ${SMALL_FIELD_MAX_LENGTH}`,
    }),

  manufacturerCode: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "keyboard manufacturer code is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `keyboard manufacturer code min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `keyboard manufacturer code max length is ${SMALL_FIELD_MAX_LENGTH}`,
    }),

  brandId: z.string().refine((field) => field.trim().length > 0, {
    message: "keyboard brand is required",
  }),
});
