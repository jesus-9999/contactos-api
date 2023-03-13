import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"usuarios"})

export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ type: 'varchar', unique:true })
    username: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'varchar' })
    nombre_usuario: string;
  
    @Column({ type: 'varchar' })
    apellido_usuario: string;
  
    @Column({ type: 'varchar' })
    telefonoCelular_usuario: string;
  
    @Column({ type: 'varchar' }) 
    telefonoFijo_usuario: string;
  
    @Column({ type: 'varchar' ,unique:true})
    correo_usuario: string;
  
    @Column({ type: 'varchar' })
    direccion_usuario: string;
  
    @Column({ type: 'varchar' })
    ciudad_usuario: string;
  
    @Column({ type: 'varchar' })
    pais_usuario: string;

  
    @Column({ type: 'date',default:()=>'CURRENT_TIMESTAMP' })
    fechaRegistro_usuario: string

}
