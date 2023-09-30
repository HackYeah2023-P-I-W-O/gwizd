import { Injectable } from '@nestjs/common';

@Injectable()
export class PointService {
    test(): string {
        return 'test!';
    }
}
