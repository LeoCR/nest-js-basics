import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthController } from '@controllers/auth/auth.controller';
import { AuthService } from '@services/auth/auth.service';
import { UsersModule } from '@modules/users/users.module';
import { jwtConstants } from '@common/constants';
import { AuthGuard } from '@services/auth/auth-guard.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '8h' },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
