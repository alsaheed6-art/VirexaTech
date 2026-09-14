import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(
    @Body() body: { email: string; password: string },
  ) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  register(
    @Body() body: { email: string; password: string; firstName: string; lastName: string; role: 'employer' | 'candidate' },
  ) {
    return this.authService.register(body);
  }
}
