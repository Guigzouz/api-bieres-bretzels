import { Module } from '@nestjs/common';
import { WhoIs } from './entities/who-is';
import { HttpModule } from '@nestjs/axios/dist';

@Module({
    imports: [HttpModule],
    providers: [WhoIs],
    exports: [WhoIs]
})
export class BotsModule {}
