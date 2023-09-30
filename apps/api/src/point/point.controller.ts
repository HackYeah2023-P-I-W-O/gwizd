import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
} from '@nestjs/common';
import { PointService } from './point.service';
import { GetAllPointParam, CreatePointParam } from './parameters/get-all.param';
@Controller('/point')
export class PointController {
    constructor(private readonly pointService: PointService) {}

    @Get()
    getAll(@Query() query: GetAllPointParam) {
        console.log(query);
        return this.pointService.getAll(query);
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.pointService.getById(id);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.pointService.delete(id);
    }

    @Post()
    create(@Body() body: CreatePointParam) {
        return this.pointService.create(body);
    }
}
