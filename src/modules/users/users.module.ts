import { Users } from '@entities/users/users.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '@services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
