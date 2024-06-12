import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { CollegeModule } from './college/college.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { CollegeEntity } from './college/college.entity';
import { CommentsEntity } from './college/comments.entity';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/build'),
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [UserEntity, CollegeEntity, CommentsEntity],
      synchronize: process.env.SYNCHRONIZE === 'True',
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    UserModule,
    CollegeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
