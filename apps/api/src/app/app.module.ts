import { Module } from '@nestjs/common';
import { ConfigModule } from '../config';
import { AppController, AppService } from '.';
import { DatabaseModule } from '../database';

@Module({
    imports: [ConfigModule, DatabaseModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
