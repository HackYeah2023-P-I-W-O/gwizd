import { NestFactory, Reflector } from '@nestjs/core';
import {
    ValidationPipe,
    ClassSerializerInterceptor,
    Logger,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app';
import { ConfigService } from './config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const env = app.get(ConfigService);

    // app.enableCors({
    //     origin: [
    //         env.CLIENT_URL,
    //         new RegExp(env.CLIENT_CORS_WILDCARD_URL),
    //         'http://localhost',
    //     ],laksjdlksad
    //     credentials: true,
    // });
    app.enableCors({
        origin: 'http://localhost:5173',
        credentials: true,
    });

    //! Add white list: true
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(
        new ClassSerializerInterceptor(app.get(Reflector)),
    );

    const config = new DocumentBuilder()
        .setTitle('API Docs')
        .addServer(env.BASE_PATH)
        .addCookieAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });

    await app.listen(env.PORT);
    Logger.log(`🚀 Application is running`);
}

bootstrap();
