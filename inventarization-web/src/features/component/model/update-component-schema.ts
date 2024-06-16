import { SMALL_FIELD } from "@shared/constants/inputs";
import { z } from "zod";

export const UpdateComponentSchema = z.object({
  model: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "model is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD.MIN_LENGTH, {
      message: `model min length is ${SMALL_FIELD.MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD.MAX_LENGTH, {
      message: `model max length is ${SMALL_FIELD.MAX_LENGTH}`,
    })
    .optional(),

  manufacturerCode: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "manufacturer code is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD.MIN_LENGTH, {
      message: `manufacturer code min length is ${SMALL_FIELD.MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD.MAX_LENGTH, {
      message: `manufacturer code max length is ${SMALL_FIELD.MAX_LENGTH}`,
    })
    .optional(),

  brandId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "brand is required",
    })
    .optional(),
});
