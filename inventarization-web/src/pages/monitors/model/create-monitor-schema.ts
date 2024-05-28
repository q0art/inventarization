import { z } from "zod";

import {
  SMALL_FIELD_MAX_LENGTH,
  SMALL_FIELD_MIN_LENGTH,
} from "@/shared/constants.ts";

export const CreateMonitorSchema = z.object({
  model: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "monitor model is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `monitor model min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `monitor model max length is ${SMALL_FIELD_MAX_LENGTH}`,
    }),

  manufacturerCode: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "monitor manufacturer code is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `monitor manufacturer code min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `monitor manufacturer code max length is ${SMALL_FIELD_MAX_LENGTH}`,
    }),

  brandId: z.string().refine((field) => field.trim().length > 0, {
    message: "monitor brand is required",
  }),
});
