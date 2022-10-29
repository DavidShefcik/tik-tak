import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { User } from '~/utils/mongoose/schemas';
import { CreateUserDto } from './dto';
import { UsersService } from './Users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getUsers(): Promise<User[]> {
    return await this.usersService.getUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  public async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }
}
