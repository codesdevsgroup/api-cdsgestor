import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { IsPublic } from '../../decorators/is-public.decorator';
import { ApiTags } from '@nestjs/swagger';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@IsPublic()
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('login')
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async login(@Req() req: AuthRequest, @Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @ApiTags('Register')
  @Post('register')
  @HttpCode(HttpStatus.OK)
  register(@Req() req: AuthRequest, @Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }
}
