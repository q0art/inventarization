import { SMALL_FIELD } from "@shared/constants/inputs";
import { z } from "zod";

export const CreateBrandSchema = z.object({
  name: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "brand is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD.MIN_LENGTH, {
      message: `brand min length is ${SMALL_FIELD.MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD.MAX_LENGTH, {
      message: `brand max length is ${SMALL_FIELD.MAX_LENGTH}`,
    }),
});
