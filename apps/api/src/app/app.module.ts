import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService, NodeEnv } from '../config';
import { AppController, AppService } from '.';
import { DatabaseModule } from '../database';
import { AuthModule } from '../auth';
import { UserModule } from '../user';
import { PointModule } from '../point/point.module';
import * as session from 'express-session';
import * as passport from 'passport';

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
export class AppModule {
    constructor(private config: ConfigService) {}

    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                session({
                    secret: this.config.COOKIE_SECRET,
                    resave: false,
                    saveUninitialized: false,
                    cookie: {
                        maxAge: 604800000,
                        httpOnly: true,
                        secure: 'auto',
                        sameSite:
                            this.config.NODE_ENV === NodeEnv.DEVELOPMENT
                                ? undefined
                                : 'none',
                    },
                }),
                passport.initialize(),
                passport.session(),
            )
            .forRoutes('*');
    }
}
