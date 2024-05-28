import { z } from "zod";

import {
  SMALL_FIELD_MAX_LENGTH,
  SMALL_FIELD_MIN_LENGTH,
} from "@/shared/constants.ts";

export const UpdateMotherboardSchema = z.object({
  model: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "motherboard model is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `motherboard model min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `motherboard model max length is ${SMALL_FIELD_MAX_LENGTH}`,
    })
    .optional(),

  manufacturerCode: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "motherboard manufacturer code is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `motherboard manufacturer code min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `motherboard manufacturer code max length is ${SMALL_FIELD_MAX_LENGTH}`,
    })
    .optional(),

  brandId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "motherboard brand is required",
    })
    .optional(),
});
