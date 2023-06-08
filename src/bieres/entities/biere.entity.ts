import { Column, Entity, PrimaryGeneratedColumn, Index, ManyToMany, JoinTable } from "typeorm";
import { TypeBiere } from "./type-biere.enum";
import { ApiProperty } from "@nestjs/swagger";
import { Menu } from "src/menus/entities/menu.entity";


@Entity()
export class Biere {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    // @ManyToMany(() => Menu)
    // @JoinTable()
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
