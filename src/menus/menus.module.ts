import { Module } from '@nestjs/common';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biere } from 'src/bieres/entities/biere.entity';
import { Bretzel } from 'src/bretzels/entities/bretzel.entity';
import { Menu } from './entities/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Biere,
    Bretzel,
    Menu
  ])],
  controllers: [MenusController],
  providers: [MenusService]
})
export class MenusModule {}
