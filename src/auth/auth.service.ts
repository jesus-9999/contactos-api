import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService,private UsuarioService:UsuarioService){

    }
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.UsuarioService.findByUsername(username);
        if (user && user.password === password) {
          const { password, ...result } = user;
          return result;
        }
        throw new UnauthorizedException('Credenciales inválidas');
      }
      async login(username: string, password: string): Promise<any> {
        const user = await this.validateUser(username, password);
        if (user) {
          const payload = { username: user.username, sub: user.id_usuario };
          return {
            access_token: this.jwtService.sign(payload),
          };
        } else {
          throw new UnauthorizedException('Credenciales inválidas');
        }
      }
}
 