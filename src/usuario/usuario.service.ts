import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
export type User = any;
@Injectable()
export class UsuarioService {
  constructor(   @InjectRepository(Usuario)
  private UsuarioRepository:Repository<Usuario>){}
  createUsuario(usuario: CreateUsuarioDto) {
    const nuevoUsuario = this.UsuarioRepository.create(usuario);
    return this.UsuarioRepository.save(nuevoUsuario);
  }

  buscarUsuarios() {
    return this.UsuarioRepository.find();
  }
  
  async findByUsername(username: string): Promise<Usuario | undefined> {
    return this.UsuarioRepository.findOne({ where: { username } });
  }
  async listarRegistros(username: string): Promise<Usuario[]> {
    const query = this.UsuarioRepository.createQueryBuilder('usuario');
    const users = await query.getMany();
    const filteredUsers = users.filter(user => user.username === username);
    return filteredUsers;
  }

  findOne(username: string) {
    return this.UsuarioRepository.findOne({where:{username}});
  }

  update(id_usuario: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.UsuarioRepository.update({id_usuario},updateUsuarioDto);
  }

  remove(id_usuario: number) {
    return this.UsuarioRepository.delete({id_usuario});
  }
}
