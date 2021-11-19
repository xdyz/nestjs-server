import { NestFactory } from '@nestjs/core';
import startSwagger from 'src/config/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  startSwagger(app);
  await app.listen(3000);
}
bootstrap();
