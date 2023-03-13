
import { Controller, Get, Request, Post, UseGuards, Put, Delete, Patch, Body } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    return this.authService.login(username, password);
  }
/* 
  @UseGuards(JwtAuthGuard)
  @Get('contacto')
  getProfile(@Request() req) {
    return req.user;
  }
  
  @UseGuards(JwtAuthGuard)
  @Post('contacto')
  createProfile(@Request() req) {
    return req.user;
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete('contacto')
  deleteProfile(@Request() req) {
    return req.user;
  }
  @UseGuards(JwtAuthGuard)
  @Patch('contacto')
  actualizarContacto(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('usuario')
  getUser(@Request() req) {
    return req.user;
  }

   */
}