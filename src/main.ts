import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //activation de la validation
  app.useGlobalPipes(new ValidationPipe());

  // activation de swagger
  const config = new DocumentBuilder()
  .setTitle('RANDOM API')
  .setDescription('Juste une API RANDOM, bières et bretzels')
  .setVersion('1.0')
  .addTag('random')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  //ecoute du port
  await app.listen(3000);
}
bootstrap();
