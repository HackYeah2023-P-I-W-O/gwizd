import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '.';
import { User } from '../database/entities';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
})
export class UserModule {}
