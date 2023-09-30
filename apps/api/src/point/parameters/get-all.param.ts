import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PointCategory } from '../point.entity';

export class GetAllPointParam {
    @ApiPropertyOptional({ enum: PointCategory })
    category?: PointCategory;
    @ApiPropertyOptional()
    danger?: boolean;
}

export class CreatePointParam {
    @ApiProperty({ enum: PointCategory })
    category: PointCategory;
    @ApiProperty()
    location: string;
    @ApiPropertyOptional()
    description?: string;
    @ApiPropertyOptional()
    photo?: string;
    @ApiProperty()
    danger: boolean;
}
