import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException
} from "@nestjs/common";
import { Request, Response } from "express";

type ErrorResponse = {
  error?: string;
  message?: string[];
  statusCode?: number;
};

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const errorResponse: ErrorResponse = exception.getResponse() as Record<
      string,
      unknown
    >;

    response.status(status).json({
      errMessage: errorResponse?.message || exception.message,
      code: 1,
      url: request.url,
      status
    });
  }
}
