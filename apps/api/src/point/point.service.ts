import { Injectable } from '@nestjs/common';
import { GetAllPointParam } from './parameters/get-all.param';
import { InjectRepository } from '@nestjs/typeorm';
import { Point } from './point.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PointService {
    constructor(
        @InjectRepository(Point) private readonly points: Repository<Point>,
    ) {}
    getAll(param: GetAllPointParam) {
        return this.points.find({
            where: {
                category: param.category,
                danger: param.danger,
            },
        });
    }
}
