import { Module } from '@nestjs/common';
import { ChartService } from './chart.service';
import { ChartController } from './chart.controller';
import { Biere } from 'src/bieres/entities/biere.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BieresService } from 'src/bieres/bieres.service';

@Module({
  imports: [TypeOrmModule.forFeature([Biere])],
  controllers: [ChartController],
  providers: [ChartService, BieresService]
})
export class ChartModule {}
