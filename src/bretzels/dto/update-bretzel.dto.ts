import { PartialType } from '@nestjs/mapped-types';
import { CreateBretzelDto } from './create-bretzel.dto';

export class UpdateBretzelDto extends PartialType(CreateBretzelDto) {}
