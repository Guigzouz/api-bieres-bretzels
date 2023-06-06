import { Module } from '@nestjs/common';
import { BretzelsService } from './bretzels.service';
import { BretzelsController } from './bretzels.controller';

@Module({
  controllers: [BretzelsController],
  providers: [BretzelsService]
})
export class BretzelsModule {}
