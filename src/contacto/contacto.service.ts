import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacto } from './contacto.entity';
import { createContactoDto } from './dto/create-contact.dto';
import { updateContactoDto } from './dto/update-contact.dto';

@Injectable()
export class ContactoService {
  constructor(
    @InjectRepository(Contacto)
    private ContactoRepository: Repository<Contacto>,
  ) {}

  createContacto(contacto: createContactoDto) {
    const nuevoContacto = this.ContactoRepository.create(contacto);
    return this.ContactoRepository.save(nuevoContacto);
  }
  listarContacto() {
    return this.ContactoRepository.find();
  }
  listarUnContacto(id_contacto: number) {
    return this.ContactoRepository.findOne({
      where: {
        id_contacto,
      },
    });
  }
  eliminarUnContacto(id_contacto: number) {
    return this.ContactoRepository.delete({id_contacto});
  }

  actualizarUnContact(id_contacto: number,contacto:updateContactoDto) {
    return this.ContactoRepository.update({id_contacto},contacto);
  }
}
