import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { Prisma } from '@prisma/client';


@Controller()
export class UsersController {

  constructor(
    private readonly userService: UsersService
  ) {}

  @Post('user')
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 200,
    description: 'The user created',
    type: User,
  })
  async createUser(
    @Body() userData : UserDto
  ): Promise<User> {
    const user : Prisma.UserCreateInput = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      dob: new Date(userData.dob),
      active: userData.active
    }
    return this.userService.createUser(user);
  }

  @Get('users')
  @ApiOperation({ summary: 'Get all users' })
  async getAllUsers () : Promise<User[]> {
    return this.userService.getAllUsers();
  }

}