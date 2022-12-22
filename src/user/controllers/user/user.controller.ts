import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post('')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    try {
      return this.userService.createUser(userData);
    } catch (err) {
      return new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);

    return id;
  }
}
