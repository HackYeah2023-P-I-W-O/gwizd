import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user';
import { RegisterDto } from './register.dto';
import { hash } from 'bcrypt';

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

    async register(data: RegisterDto) {
        return this.userService.create({
            email: data.email,
            username: data.username,
            passwordHash: await hash(data.password, 10),
        });
    }
}
