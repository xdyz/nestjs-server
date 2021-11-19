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

@Controller('users')
@UseGuards(AuthGuard('local'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findOneByName(@Param('name') name: string) {
    return this.usersService.findOneByName(name);
  }
}
