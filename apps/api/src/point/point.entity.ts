import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

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

    @Column()
    user: null;

    @Column()
    location: string;

    @CreateDateColumn()
    created: Date;

    @Column()
    description: string;

    @Column()
    photo: string;

    @Column()
    danger: boolean;
}
