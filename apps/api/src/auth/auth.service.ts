import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async login(emailOrUsername: string, password: string) {
        try {
            const user = await this.userService.findOneOrFail(emailOrUsername);

            if (!(await user.validatePassword(password)))
                throw new UnauthorizedException();

            return user;
        } catch {
            throw new UnauthorizedException();
        }
    }
}
