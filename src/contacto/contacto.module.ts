import { ContactoService } from './contacto.service';
import { Module } from '@nestjs/common';
import { ContactoController } from './contacto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacto } from './contacto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contacto])],
  providers: [ContactoService],
  controllers: [ContactoController],
}) 
export class ContactoModule {}
