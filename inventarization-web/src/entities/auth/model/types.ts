import { JWTPayload } from "@/shared/types/jwt-payload.ts";

export type AuthState = {
  user: JWTPayload | null;
  accessToken: string | null;
};
