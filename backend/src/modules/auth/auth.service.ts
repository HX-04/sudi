import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async sendVerificationCode(phone: string): Promise<{ message: string }> {
    // TODO: 集成短信服务商发送验证码
    // 开发阶段直接返回固定验证码 123456
    console.log(`[DEV] 验证码已发送到 ${phone}: 123456`);
    return { message: '验证码已发送' };
  }

  async register(phone: string, code: string, password: string) {
    // TODO: 验证 code
    const hashedPassword = await bcrypt.hash(password, 12);
    // TODO: 保存用户到数据库
    return { message: '注册成功' };
  }

  async login(phone: string, password: string) {
    // TODO: 从数据库查用户并验证密码
    const payload = { sub: 'user-id', phone, role: 'user' };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async refresh(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      return {
        accessToken: this.jwtService.sign({
          sub: payload.sub,
          phone: payload.phone,
          role: payload.role,
        }),
      };
    } catch {
      throw new UnauthorizedException('Token 已过期，请重新登录');
    }
  }
}
