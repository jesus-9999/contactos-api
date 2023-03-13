import { type } from "os";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'contacto'})
export class Contacto{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'varchar'})
    nombre:string;
    @Column({type:'varchar'})
    precio:string;
}