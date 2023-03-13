import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post() 
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.createUsuario(createUsuarioDto);
  }
  @Get(':username')
  async findByUsername(@Param('username') username: string): Promise<Usuario | undefined> {
    return this.usuarioService.findByUsername(username);
  }
  @Get()
  buscarUsuarios() {
    return this.usuarioService.buscarUsuarios();
  }
@Get('reg')
async listarRegistros(@Query('username') username: string): Promise<Usuario[]> {
  return this.usuarioService.listarRegistros(username);
}

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usuarioService.findOne(username);
  } 

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
