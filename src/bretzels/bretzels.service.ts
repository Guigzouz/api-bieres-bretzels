import { Injectable } from '@nestjs/common';
import { CreateBretzelDto } from './dto/create-bretzel.dto';
import { UpdateBretzelDto } from './dto/update-bretzel.dto';

@Injectable()
export class BretzelsService {
  create(createBretzelDto: CreateBretzelDto) {
    return 'This action adds a new bretzel';
  }

  findAll() {
    return `This action returns all bretzels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bretzel`;
  }

  update(id: number, updateBretzelDto: UpdateBretzelDto) {
    return `This action updates a #${id} bretzel`;
  }

  remove(id: number) {
    return `This action removes a #${id} bretzel`;
  }
}
