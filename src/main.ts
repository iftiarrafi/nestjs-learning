import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist : true, // For DTO
    forbidNonWhitelisted : true, // for proper error sending if DTO issues occur
    transform:true // can transform properties automatically if necessary

  }))

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
