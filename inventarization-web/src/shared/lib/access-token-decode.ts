import { JwtPayload } from "@shared/types/global";
import * as jwt from "jsonwebtoken";

export const accessTokenDecode = (accessToken: string) => {
  const user = jwt.decode(accessToken) as JwtPayload;

  return {
    id: user.id,
    email: user.email,
  } as JwtPayload;
};
