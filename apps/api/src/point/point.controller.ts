import { Controller, Delete, Get, Param } from '@nestjs/common';
import { PointService } from './point.service';
import { GetAllPointParam } from './parameters/get-all.param';
@Controller('/point')
export class PointController {
    constructor(private readonly pointService: PointService) {}

    @Get()
    getAll(@Param() params: GetAllPointParam) {
        return this.pointService.getAll(params);
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.pointService.getOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.pointService.delete(id);
    }
}
