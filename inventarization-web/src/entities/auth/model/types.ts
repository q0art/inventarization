import { JwtPayload } from "@shared/types/global";

export type SignInDto = {
  email: string;
  password: string;
};

export type SignUpDto = {
  email: string;
  password: string;
};

export type AccessToken = {
  accessToken: string;
};

export type AuthState = {
  user: JwtPayload | null;
  accessToken: string | null;
};
