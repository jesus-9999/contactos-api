
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contacto' })
export class Contacto {
  @PrimaryGeneratedColumn()
  id_contacto: number;

  @Column({ type: 'varchar' })
  id_usuario: number;

  @Column({ type: 'varchar' })
  nombre_contacto: string;

  @Column({ type: 'varchar' })
  apellido_contacto: string;

  @Column({ type: 'varchar' })
  telefonoCelular_contacto: string;

  @Column({ type: 'varchar' })
  telefonoFijo_contacto: string;

  @Column({ type: 'varchar' })
  correo_contacto: string;

  @Column({ type: 'varchar' })
  direccion_contacto: string;

  @Column({ type: 'varchar' })
  ciudad_contacto: string;

  @Column({ type: 'varchar' })
  pais_contacto: string;

  @Column({ type: 'date',default:()=>'CURRENT_TIMESTAMP' })
  fechaRegistro_contacto: string;


}
