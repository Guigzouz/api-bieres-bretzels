import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BretzelsService } from './bretzels.service';
import { CreateBretzelDto } from './dto/create-bretzel.dto';
import { UpdateBretzelDto } from './dto/update-bretzel.dto';

@Controller('bretzels')
export class BretzelsController {
  constructor(private readonly bretzelsService: BretzelsService) {}

  @Post()
  create(@Body() createBretzelDto: CreateBretzelDto) {
    return this.bretzelsService.create(createBretzelDto);
  }

  @Get()
  findAll() {
    return this.bretzelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bretzelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBretzelDto: UpdateBretzelDto) {
    return this.bretzelsService.update(+id, updateBretzelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bretzelsService.remove(+id);
  }
}
