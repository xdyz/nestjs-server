import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginAuthDto } from '../dtos/login-auth.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
@ApiTags('登录')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  @ApiOperation({
    summary: '用户登录',
    description: '生成token',
  })
  async login(@Body() loginDto: LoginAuthDto, @Request() req) {
    return this.authService.login(req.user);
  }
}
