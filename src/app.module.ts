import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BieresModule } from './bieres/bieres.module';
import { BretzelsModule } from './bretzels/bretzels.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EventsGateway } from './gateway/events/events.gateway';
import { Groom } from './bots/entities/groom';
import { WhoIs } from './bots/entities/who-is';
import { BotsModule } from './bots/bots.module';

@Module({
  imports: [BieresModule, BretzelsModule, 
   ConfigModule.forRoot({
    envFilePath: '.env'
   })
  ,TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: true, //synchronise les tables
  }),BotsModule
],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule {}
