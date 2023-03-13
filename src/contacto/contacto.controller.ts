import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  ParseIntPipe
} from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { createContactoDto } from './dto/create-contact.dto';
import { updateContactoDto } from './dto/update-contact.dto';

@Controller('contacto')
export class ContactoController {
  constructor(private contactoServise: ContactoService) {}

  @Post()
  createContacto(@Body() newContact: createContactoDto) {
    return this.contactoServise.createContacto(newContact);
  }
  @Get()
  listContactos() {
    return this.contactoServise.listarContacto();
  }
  @Get(':id_contacto')
  listUnContactos(@Param('id_contacto') id_contacto: number) {
    return this.contactoServise.listarUnContacto(id_contacto); 
  }
  @Patch(':id_contacto')
  actualizarContacto(
    @Param('id_contacto',ParseIntPipe) id_contacto: number,
    @Body() contacto: updateContactoDto,
  ) {
    return this.contactoServise.actualizarUnContact(+id_contacto, contacto);
  }
  
  @Delete(':id_contacto')
  eliminarContacto(@Param('id_contacto',ParseIntPipe) id_contacto: number) {
    return this.contactoServise.eliminarUnContacto(id_contacto);
  }
}
