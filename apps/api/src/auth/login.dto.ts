import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ example: 'admin@admin.com' })
    emailOrUsername: string;

    @ApiProperty({ example: 'admin123' })
    password: string;
}
