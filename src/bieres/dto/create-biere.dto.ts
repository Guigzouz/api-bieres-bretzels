import { IsNotEmpty, MaxLength, IsDefined, Min, IsEnum } from "class-validator";
import { TypeBiere } from "../entities/type-biere.enum";

export class CreateBiereDto {

    @IsNotEmpty()
    @MaxLength(100)
    nom: string;

    @IsDefined()
    description: string;

    @IsDefined()
    @Min(0)
    prix: number;

    @IsEnum(TypeBiere)
    @IsDefined()
    type: TypeBiere;
}
