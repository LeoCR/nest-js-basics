import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@services/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, pass) {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      // Don't do this in your real app! instead use a library like bcrypt, with a salted one-way hash algorithm.
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
