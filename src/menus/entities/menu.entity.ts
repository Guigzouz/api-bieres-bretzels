import { ApiProperty } from "@nestjs/swagger";
import { Biere } from "src/bieres/entities/biere.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id!: number;

    @ApiProperty()
    @Column({length: 100})
    name!: string;

    @ApiProperty()
    // @ManyToMany(() => Biere)
    bieres: Biere[];
} 