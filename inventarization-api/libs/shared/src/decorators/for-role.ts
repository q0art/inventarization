import { FOR_ROLE_KEY } from "@app/shared/helpers";
import { SetMetadata } from "@nestjs/common";
import { Role } from "@prisma/client";

export const ForRole = (role: Role) => SetMetadata(FOR_ROLE_KEY, role);
