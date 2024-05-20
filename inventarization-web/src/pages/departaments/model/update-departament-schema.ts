import { z } from "zod";

import {
  SMALL_FIELD_MAX_LENGTH,
  SMALL_FIELD_MIN_LENGTH,
} from "@/shared/constants.ts";

export const UpdateDepartamentSchema = z.object({
  name: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "departament is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `departament min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `departament max length is ${SMALL_FIELD_MAX_LENGTH}`,
    }),
});
