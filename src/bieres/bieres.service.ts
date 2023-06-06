import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBiereDto } from './dto/create-biere.dto';
import { UpdateBiereDto } from './dto/update-biere.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Biere } from './entities/biere.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class BieresService {

  constructor(@InjectRepository(Biere) private data: Repository<Biere>){}

  create(dto: CreateBiereDto): Promise<Biere> {
    return this.data.save(dto);
  }

  findAll(): Promise<Biere[]> {
    return this.data.find();
  }

  findOne(id: number): Promise<Biere> {
    return this.data.findOneBy({id});
  }

  async update(id: number, dto: UpdateBiereDto): Promise<Biere> {
    let done = await this.data.update(id, dto);
    if(done.affected != 1)
      throw new NotFoundException(id)
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    let done : DeleteResult = await this.data.delete(id);
    if (done.affected != 1)
      throw new NotFoundException(id)
  }
}
