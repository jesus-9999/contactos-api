import { IsNotEmpty } from "@nestjs/class-validator";

export class CreateUsuarioDto {
    @IsNotEmpty()
    nombre_usuario: string;
    @IsNotEmpty()
    apellido_usuario: string;
    @IsNotEmpty()
    telefonoCelular_usuario: string;  
    @IsNotEmpty()
    telefonoFijo_usuario: string;
    @IsNotEmpty()
    correo_usuario: string;
    @IsNotEmpty()
    direccion_usuario: string;
    @IsNotEmpty()
    ciudad_usuario: string;
    @IsNotEmpty()
    pais_usuario: string;
    @IsNotEmpty()
    fechaRegistro_usuario: string;
}
