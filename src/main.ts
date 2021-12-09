import { NestFactory } from '@nestjs/core';
import startSwagger from 'src/config/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './config/http-exception.filter';
import { TransformInterceptor } from './config/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  // 开启跨域配置
  app.enableCors();

  // swagger 配置
  startSwagger(app);

  // 配置全局的拦截器，统一返回数据格式
  app.useGlobalInterceptors(new TransformInterceptor());
  // 配置全局的错误过滤器，设置成统一的返回格式
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
