import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  await app.listen(AppModule.APP_PORT, () => {
    logger.log(`Application is running on PORT: ${AppModule.APP_PORT}`);
  });
}
bootstrap();
