import { Module } from '@nestjs/common';
import { BieresService } from './bieres.service';
import { BieresController } from './bieres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biere } from './entities/biere.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Biere])],
  controllers: [BieresController],
  providers: [BieresService]
})
export class BieresModule {}
