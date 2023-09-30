import { Injectable } from '@nestjs/common';
import { CreatePointParam, GetAllPointParam } from './parameters/get-all.param';
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
    getById(id: number) {
        return this.points.findOne({ where: { id } });
    }
    delete(id: number) {
        this.points.delete({ id });
    }
    create(param: CreatePointParam) {
        return this.points.save({
            category: param.category,
            location: param.location,
            description: param.description,
            photo: param.photo,
            danger: param.danger,
        });
    }
    edit(id: number, param: CreatePointParam) {
        return this.points.save({
            id: id,
            category: param.category,
            location: param.location,
            description: param.description,
            photo: param.photo,
            danger: param.danger,
        });
    }
}
