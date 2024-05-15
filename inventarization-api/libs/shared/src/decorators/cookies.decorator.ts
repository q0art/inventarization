import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Cookies = createParamDecorator((key: string, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const cookies = request.cookies;

  if (key) return cookies[key] ? cookies[key] : null;

  return cookies;
});
