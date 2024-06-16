import { JwtPayload } from "@shared/types/global";

export type AuthState = {
  user: JwtPayload | null;
  accessToken: string | null;
};
