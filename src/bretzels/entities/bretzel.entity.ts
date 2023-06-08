import { Column, Entity, PrimaryGeneratedColumn, Index, ManyToMany, JoinTable } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


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
}
