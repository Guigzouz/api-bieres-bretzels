import { Column, Entity, PrimaryGeneratedColumn, Index, ManyToMany, JoinTable, OneToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Biere } from "../../bieres/entities/biere.entity";
import { Menu } from "src/menus/entities/menu.entity";


@Entity()
export class Bretzel {

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

    @OneToOne(() => Biere)
    @JoinColumn()
    bundle: Biere;

    @ManyToMany(() => Menu)
    menus: Menu[];
}
