import { Module } from '@nestjs/common';
import { ConfigModule } from '../config';
import { AppController, AppService } from '.';
import { DatabaseModule } from '../database';
import { AuthModule } from '../auth';
import { UserModule } from '../user';
import { PointModule } from '../point/point.module';

@Module({
    imports: [
        ConfigModule,
        DatabaseModule,
        AuthModule,
        UserModule,
        PointModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
