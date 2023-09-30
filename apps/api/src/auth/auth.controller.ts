import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiBody } from '@nestjs/swagger';
import { User } from 'src/user';
import { ReqUser } from './req-user.decorator';
import { CookieGuard } from './cookie.guard';
import { LoginGuard } from './login.guard';
import { LoginDto } from './login.dto';
import { RegisterDto } from './register.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Get('@me')
    @UseGuards(CookieGuard)
    @ApiOkResponse({ type: User })
    me(@ReqUser() user: User) {
        return user;
    }

    @Post('login')
    @UseGuards(LoginGuard)
    @ApiBody({ type: LoginDto })
    login(@ReqUser() user: User) {
        return user;
    }

    @Post('register')
    register(@Body() body: RegisterDto) {
        return this.authService.register(body);
    }
}
