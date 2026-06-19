import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('send-code')
  async sendCode(@Body('phone') phone: string) {
    return this.authService.sendVerificationCode(phone);
  }

  @Post('register')
  async register(
    @Body('phone') phone: string,
    @Body('code') code: string,
    @Body('password') password: string,
  ) {
    return this.authService.register(phone, code, password);
  }

  @Post('login')
  async login(
    @Body('phone') phone: string,
    @Body('password') password: string,
  ) {
    return this.authService.login(phone, password);
  }

  @Post('refresh')
  async refresh(@Body('refreshToken') refreshToken: string) {
    return this.authService.refresh(refreshToken);
  }
}
