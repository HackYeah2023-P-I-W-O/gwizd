import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class RegisterDto {
    @ApiProperty({ example: 'admin@admin.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'admin' })
    @IsString()
    @Length(3, 64)
    username: string;

    @ApiProperty({ example: 'admin123' })
    @IsString()
    @Length(6)
    password: string;
}
