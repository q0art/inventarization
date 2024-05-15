import { AuthController } from "@auth/auth.controller";
import { AuthService } from "@auth/auth.service";
import { jwtOptions } from "@auth/configuration";
import { JwtGuard } from "@auth/guards";
import { JwtStrategy } from "@auth/strategies";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "@user/user.module";

const guards = [JwtGuard];
const strategies = [JwtStrategy];

@Module({
  imports: [JwtModule.registerAsync(jwtOptions()), PassportModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService, ...guards, ...strategies],
})
export class AuthModule {}
