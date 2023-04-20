import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '@entities/users/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}
  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ id });
  }
  findByEmail(email: string): Promise<Users | null> {
    return this.usersRepository.findOneBy({ email });
  }
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
