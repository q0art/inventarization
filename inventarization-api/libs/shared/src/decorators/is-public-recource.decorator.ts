import { IS_PUBLIC_RESOURCE_KEY } from "@app/shared/helpers";
import { ExecutionContext, SetMetadata } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

export const IsPublicResource = () => SetMetadata(IS_PUBLIC_RESOURCE_KEY, true);

export const IsPublic = (context: ExecutionContext, reflector: Reflector) =>
  reflector.getAllAndOverride<boolean>(IS_PUBLIC_RESOURCE_KEY, [
    context.getHandler(),
    context.getClass(),
  ]);
