import { PointCategory } from '../point.entity';

export class GetAllPointParam {
    category?: PointCategory;
    danger?: boolean;
}

export class CreatePointParam {
    category: PointCategory;
    location: string;
    description?: string;
    photo?: string;
    danger: boolean;
}
