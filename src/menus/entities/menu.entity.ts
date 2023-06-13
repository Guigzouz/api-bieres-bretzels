import { ApiProperty } from "@nestjs/swagger";
import { Biere } from "src/bieres/entities/biere.entity";
import { Bretzel } from "src/bretzels/entities/bretzel.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id!: number;

    @ApiProperty()
    @Column({length: 100})
    name!: string;

    @ApiProperty()
    bieres: Biere[];

    @ApiProperty()
    @ManyToMany(() => Bretzel)
    @JoinTable()
    bretzels: Bretzel[];
} 