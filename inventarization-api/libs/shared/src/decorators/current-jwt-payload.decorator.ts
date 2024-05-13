import { JwtPayload } from "@app/shared/types";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentJwtPayload = createParamDecorator(
  (key: keyof JwtPayload, context: ExecutionContext): JwtPayload => {
    const request = context.switchToHttp().getRequest();

    return key ? request.user[key] : request.user;
  },
);
