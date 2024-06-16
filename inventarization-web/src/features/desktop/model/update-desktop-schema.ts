import {
  SMALL_FIELD_MAX_LENGTH,
  SMALL_FIELD_MIN_LENGTH,
} from "@shared/constants/input-fields";
import { z } from "zod";

export const UpdateDesktopSchema = z.object({
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
    })
    .optional(),

  cpuId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "cpuId is required",
    })
    .optional(),

  gpuId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "gpuId is required",
    })
    .optional(),

  ramId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "cpuId is required",
    })
    .optional(),

  ssdId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "cpuId is required",
    })
    .optional(),

  motherboardId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "cpuId is required",
    })
    .optional(),

  caseId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "cpuId is required",
    })
    .optional(),

  coolerId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "cpuId is required",
    })
    .optional(),
});
