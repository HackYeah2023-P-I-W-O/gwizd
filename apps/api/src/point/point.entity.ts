import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

import { Point as PointType } from 'geojson';

export enum PointCategory {
    Dog,
    Cat,
    Squirrel,
    Bear,
    Anaconda,
    Other,
}

@Entity()
export class Point {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: PointCategory.Other })
    category: PointCategory;

    @Column('geometry')
    location: PointType;

    @CreateDateColumn()
    created: Date;

    @Column({ default: '' })
    description: string;

    @Column({ default: '' })
    photo: string;

    @Column({ default: false })
    danger: boolean;
}
