import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PointCategory } from '../point.entity';
import { Point as PointType } from 'geojson';

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
    location: PointType;
    @ApiPropertyOptional()
    description?: string;
    @ApiPropertyOptional()
    photo?: string;
    @ApiProperty()
    danger: boolean;
}
