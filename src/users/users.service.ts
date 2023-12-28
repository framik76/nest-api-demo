import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(private prisma : PrismaService) {}

  async createUser(data : Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({data});
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

}