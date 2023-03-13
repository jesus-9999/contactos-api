import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey:'test',
          });
      }
 
      async validate(payload: any) {
        return { id_usuario: payload.sub, username: payload.username };
      }
}