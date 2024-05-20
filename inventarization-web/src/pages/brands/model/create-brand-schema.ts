import { z } from "zod";

import {
  SMALL_FIELD_MAX_LENGTH,
  SMALL_FIELD_MIN_LENGTH,
} from "@/shared/constants.ts";

export const CreateBrandSchema = z.object({
  name: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "brand is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `brand min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `brand max length is ${SMALL_FIELD_MAX_LENGTH}`,
    }),
});
