import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Contacto } from './contacto/contacto.entity';
import { ContactoModule } from './contacto/contacto.module';
import { AuthModule } from './auth/auth.module'; 

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'contacts',
      entities: [Usuario,Contacto],
      synchronize: true,
      migrationsRun: false,
    }),
    UsuarioModule,
    ContactoModule,
    AuthModule

  
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
