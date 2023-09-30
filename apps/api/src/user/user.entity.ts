import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { compare } from 'bcrypt';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    username: string;

    @Column()
    passwordHash: string;

    validatePassword(password: string) {
        return compare(password, this.passwordHash);
    }
}
