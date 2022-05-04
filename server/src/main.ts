import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cookiesSession = require('cookie-session');
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors: {
    origin: 'http://localhost:3001',
    credentials: true,
  }});
  app.use(
    cookiesSession({
      keys: ['asdfasdf']
    })
  )
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  await app.listen(3000);
}
bootstrap();
