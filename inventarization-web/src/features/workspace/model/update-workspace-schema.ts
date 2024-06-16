import {
  SMALL_FIELD_MAX_LENGTH,
  SMALL_FIELD_MIN_LENGTH,
} from "@shared/constants/input-fields";
import { z } from "zod";

export const UpdateWorkspaceSchema = z.object({
  name: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "workspace name is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD_MIN_LENGTH, {
      message: `workspace name min length is ${SMALL_FIELD_MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD_MAX_LENGTH, {
      message: `workspace name max length is ${SMALL_FIELD_MAX_LENGTH}`,
    })
    .optional(),

  monitorId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "monitorId is required",
    })
    .optional(),

  desktopId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "desktopId is required",
    })
    .optional(),

  mouseId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "mouseId is required",
    })
    .optional(),

  mousepadId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "mousepadId is required",
    })
    .optional(),

  keyboardId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "keyboardIdis required",
    })
    .optional(),

  headphoneId: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "headphoneId is required",
    })
    .optional(),
});
