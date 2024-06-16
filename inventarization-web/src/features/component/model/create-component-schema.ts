import {
  SMALL_FIELD_MAX_LENGTH,
  SMALL_FIELD_MIN_LENGTH,
} from "@shared/constants/input-fields";
import { z } from "zod";

export const CreateComponentSchema = z.object({
  model: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "model is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `model min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `model max length is ${SMALL_FIELD_MAX_LENGTH}`,
    }),

  manufacturerCode: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "manufacturer code is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `manufacturer code min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `manufacturer code max length is ${SMALL_FIELD_MAX_LENGTH}`,
    }),

  brandId: z.string().refine((field) => field.trim().length > 0, {
    message: "brand is required",
  }),
});
