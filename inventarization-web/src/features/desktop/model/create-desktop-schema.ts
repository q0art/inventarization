import { z } from "zod";

import {
  SMALL_FIELD_MAX_LENGTH,
  SMALL_FIELD_MIN_LENGTH,
} from "@/shared/constants/input-fields";

export const CreateDesktopSchema = z.object({
  name: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "desktop name is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `desktop name min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `desktop name max length is ${SMALL_FIELD_MAX_LENGTH}`,
    }),

  cpuId: z.string().refine((field) => field.trim().length > 0, {
    message: "cpuId is required",
  }),

  gpuId: z.string().refine((field) => field.trim().length > 0, {
    message: "gpuId is required",
  }),

  ramId: z.string().refine((field) => field.trim().length > 0, {
    message: "cpuId is required",
  }),

  ssdId: z.string().refine((field) => field.trim().length > 0, {
    message: "cpuId is required",
  }),

  motherboardId: z.string().refine((field) => field.trim().length > 0, {
    message: "cpuId is required",
  }),

  caseId: z.string().refine((field) => field.trim().length > 0, {
    message: "cpuId is required",
  }),

  coolerId: z.string().refine((field) => field.trim().length > 0, {
    message: "cpuId is required",
  }),
});
