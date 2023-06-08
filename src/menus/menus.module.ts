import { Module } from '@nestjs/common';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biere } from 'src/bieres/entities/biere.entity';
import { Bretzel } from 'src/bretzels/entities/bretzel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Biere,
    Bretzel
  ])],
  controllers: [MenusController],
  providers: [MenusService]
})
export class MenusModule {}
