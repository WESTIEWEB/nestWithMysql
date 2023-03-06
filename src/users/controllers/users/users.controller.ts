import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() input: string): Promise<void> {
    return null;
  }

  @Get()
  async getUsers(): Promise<void> {
    return null;
  }
}
