import { SMALL_FIELD } from "@shared/constants/inputs";
import { z } from "zod";

export const CreateWorkspaceSchema = z.object({
  name: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: "workspace name is required",
    })
    .refine((field) => field.trim().length >= SMALL_FIELD.MIN_LENGTH, {
      message: `workspace name min length is ${SMALL_FIELD.MIN_LENGTH}`,
    })
    .refine((field) => field.trim().length <= SMALL_FIELD.MAX_LENGTH, {
      message: `workspace name max length is ${SMALL_FIELD.MAX_LENGTH}`,
    }),

  monitorId: z.string().refine((field) => field.trim().length > 0, {
    message: "monitorId is required",
  }),

  desktopId: z.string().refine((field) => field.trim().length > 0, {
    message: "desktopId is required",
  }),

  mouseId: z.string().refine((field) => field.trim().length > 0, {
    message: "mouseId is required",
  }),

  mousepadId: z.string().refine((field) => field.trim().length > 0, {
    message: "mousepadId is required",
  }),

  keyboardId: z.string().refine((field) => field.trim().length > 0, {
    message: "keyboardIdis required",
  }),

  headphoneId: z.string().refine((field) => field.trim().length > 0, {
    message: "headphoneId is required",
  }),
});
