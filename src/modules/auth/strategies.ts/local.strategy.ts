import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  // AuthGuard('local') 将用户信息解析之后，挂在到了req.user 上  这样就可以拿到用户token上的信息了
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    // 找不到该用户就直接报错 401
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
