import { Controller, Get, UseGuards, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiBody } from '@nestjs/swagger';
import { User } from 'src/user';
import { ReqUser } from './req-user.decorator';
import { CookieGuard } from './cookie.guard';
import { LoginGuard } from './login.guard';
import { LoginDto } from './login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
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
}
