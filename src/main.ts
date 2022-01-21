import { NestFactory } from "@nestjs/core";
import startSwagger from "src/config/swagger";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./config/http-exception.filter";
import { TransformInterceptor } from "./config/transform.interceptor";
import * as Redis from "ioredis";
import { type } from "os";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const redis = new Redis({
    host: "10.30.60.13",
    port: 6379
  });

  redis.hset("test", "test", JSON.stringify({ a: "b" }));
  const a = await redis.lrange("fs", 0, -1);
  console.log(a);

  const b = await redis.hvals("test");
  console.log(b);

  app.setGlobalPrefix("api/v1");
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
