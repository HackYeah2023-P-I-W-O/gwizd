import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { PointService } from './point.service';
import { GetAllPointParam, CreatePointParam } from './parameters/get-all.param';
import { CookieGuard } from '../auth/cookie.guard';
@Controller('/point')
export class PointController {
    constructor(private readonly pointService: PointService) {}

    @Get()
    getAll(@Param() query: GetAllPointParam) {
        return this.pointService.getAll(query);
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.pointService.getById(id);
    }

    @Delete(':id')
    @UseGuards(CookieGuard)
    delete(@Param('id') id: number) {
        return this.pointService.delete(id);
    }

    @Post()
    @UseGuards(CookieGuard)
    create(@Body() body: CreatePointParam) {
        return this.pointService.create(body);
    }

    @Patch(':id')
    @UseGuards(CookieGuard)
    edit(@Param('id') id: number, @Body() body: CreatePointParam) {
        return this.pointService.edit(id, body);
    }
}
