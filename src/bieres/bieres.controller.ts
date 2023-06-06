import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BieresService } from './bieres.service';
import { CreateBiereDto } from './dto/create-biere.dto';
import { UpdateBiereDto } from './dto/update-biere.dto';

@Controller('bieres')
export class BieresController {
  constructor(private readonly bieresService: BieresService) {}

  @Post()
  create(@Body() createBiereDto: CreateBiereDto) {
    return this.bieresService.create(createBiereDto);
  }

  @Get()
  findAll() {
    return this.bieresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bieresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiereDto: UpdateBiereDto) {
    return this.bieresService.update(+id, updateBiereDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bieresService.remove(+id);
  }
}
