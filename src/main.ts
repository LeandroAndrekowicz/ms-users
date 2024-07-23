import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { addSwagger } from './app/config/swagger.config';
import { addRedisClient } from './app/config/redis.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  addSwagger(app);
  
  app.useGlobalPipes(new ValidationPipe);

  await app.listen(process.env.PORT, () => Logger.verbose(`Application running in localhost:${process.env.PORT}`));

  await addRedisClient(configService);
}
bootstrap();
