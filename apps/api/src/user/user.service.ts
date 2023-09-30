import { Injectable } from '@nestjs/common';
import { User } from '../database/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>,
    ) {}

    findOne(emailOrUsername: string) {
        return this.users.findOne({
            where: [{ email: emailOrUsername }, { username: emailOrUsername }],
        });
    }
}
