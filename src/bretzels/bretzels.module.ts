import { Module } from '@nestjs/common';
import { BretzelsService } from './bretzels.service';
import { BretzelsController } from './bretzels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bretzel } from './entities/bretzel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bretzel])],
  controllers: [BretzelsController],
  providers: [BretzelsService]
})
export class BretzelsModule {}
