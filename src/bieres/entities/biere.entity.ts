import { Column, Entity, PrimaryGeneratedColumn, Index } from "typeorm";
import { TypeBiere } from "./type-biere.enum";


@Entity()
export class Biere {

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Index()
    @Column({length: 50})
    nom!: string;

    @Column({length: 240})
    description: string;

    @Column()
    prix: number;

    @Column({type: "enum", enum: TypeBiere})
    type: TypeBiere;
}
