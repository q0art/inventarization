import * as jwt from "jsonwebtoken";

import { JWTPayload } from "@/shared/types/jwt-payload";

export const accessTokenDecode = (accessToken: string) => {
  const user = jwt.decode(accessToken) as JWTPayload;

  return {
    id: user.id,
    email: user.email,
  } as JWTPayload;
};
