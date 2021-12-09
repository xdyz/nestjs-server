import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/services/users.service';

@Injectable()
export class AuthService {
  @Inject(UsersService)
  private readonly usersService: UsersService;
  @Inject(JwtService)
  private readonly jwtService: JwtService;


  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByName(username, pass);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, id: user.id };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
