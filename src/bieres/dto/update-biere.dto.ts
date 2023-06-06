import { PartialType } from '@nestjs/mapped-types';
import { CreateBiereDto } from './create-biere.dto';

export class UpdateBiereDto extends PartialType(CreateBiereDto) {}
