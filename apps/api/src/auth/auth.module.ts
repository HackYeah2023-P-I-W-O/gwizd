import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user';
import { AuthService, AuthController, LocalStrategy } from '.';
import { LocalSerializer } from './local.serializer';

@Module({
    imports: [UserModule, PassportModule],
    providers: [AuthService, LocalStrategy, LocalSerializer],
    controllers: [AuthController],
})
export class AuthModule {}
