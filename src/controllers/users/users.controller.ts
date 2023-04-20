import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from '@services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':userId')
  @HttpCode(HttpStatus.ACCEPTED) // 👈 Using decorator
  getOne(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.findOne(userId);
  }
}
