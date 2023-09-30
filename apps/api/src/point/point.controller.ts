import { Controller, Get } from '@nestjs/common';
import { PointService } from './point.service';

@Controller('/point')
export class PointController {
    constructor(private readonly PointService: PointService) {}

    @Get()
    getHello(): string {
        return this.PointService.test();
    }
}
