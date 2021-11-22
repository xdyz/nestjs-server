import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginAuthDto } from '../dtos/login-auth.dto';
import { AuthService } from '../services/auth.service';
import { UsersService } from 'src/modules/users/services/users.service';
@Controller('auth')
@ApiTags('登录')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  @ApiOperation({
    summary: '用户登录',
    description: '生成token',
  })
  async login(@Body() loginDto: LoginAuthDto, @Request() req) {
    return this.authService.login(req.user);
  }

  @Get('/user')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @ApiOperation({
    summary: '获取用户信息',
    description: '获取用户信息',
  })
  async getUserinfo(@Request() req) {
    console.log(req.user);

    return this.usersService.findOneByUser(req.user.id);
  }
}
