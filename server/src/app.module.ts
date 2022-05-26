import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegeModule } from './college/college.module';
import { CollegeEntity } from './college/college.entity';
import { CommentsEntity } from './college/comments.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities:[UserEntity, CollegeEntity, CommentsEntity],
    synchronize: true
  }), UserModule, CollegeModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
