import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../user';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>,
    ) {}

    async findOneOrFail(emailOrUsername: string) {
        const user = await this.users.findOne({
            where: [{ email: emailOrUsername }, { username: emailOrUsername }],
        });

        if (!user) throw new NotFoundException();
        return user;
    }
}
