import { SMALL_FIELD } from "@shared/constants/inputs";
import { z } from "zod";

export const CreateDepartamentSchema = z.object({
  name: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "departament is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD.MIN_LENGTH, {
      message: `departament min length is ${SMALL_FIELD.MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD.MAX_LENGTH, {
      message: `departament max length is ${SMALL_FIELD.MAX_LENGTH}`,
    }),
});
