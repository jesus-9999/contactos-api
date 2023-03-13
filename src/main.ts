import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';




async function bootstrap() {
  const server = new ExpressAdapter();
  const app = await NestFactory.create(AppModule, server);
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
