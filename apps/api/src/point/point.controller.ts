import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
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

    @Patch(':id')
    edit(@Param('id') id: number, @Body() body: CreatePointParam) {
        return this.pointService.edit(id, body);
    }
}
