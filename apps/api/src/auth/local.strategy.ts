import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '.';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'emailOrUsername' });
    }

    validate(emailOrUsername: string, password: string) {
        return this.authService.login(emailOrUsername, password);
    }
}
