import { Module } from '@nestjs/common';
import { WhoIs } from './entities/who-is';
import { HttpModule } from '@nestjs/axios/dist';
import { Lorem } from './entities/lorem';

@Module({
    imports: [HttpModule],
    providers: [WhoIs, Lorem],
    exports: [WhoIs, Lorem]
})
export class BotsModule {}
