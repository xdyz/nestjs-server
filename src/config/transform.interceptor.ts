// 配置全局拦截器，对所有接口进行统一的返回格式处理
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T; // 返回数据
  code: number; // 返回状态码
  msg: string; // 返回消息
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        code: 0,
        msg: 'success'
      }))
    );
  }
}
