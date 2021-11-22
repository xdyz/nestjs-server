import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
// @UseGuards(AuthGuard('jwt'))
@ApiTags('用户')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // findOneByName(@Param('name') name: string) {
  //   return this.usersService.findOneByName(name);
  // }
}
