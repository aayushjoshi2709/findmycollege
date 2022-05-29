import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { CollegeModule } from './college/college.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CollegeEntity } from './college/college.entity';
import { CommentsEntity } from './college/comments.entity';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/build'),
    }),
    TypeOrmModule.forRoot({
      name: "default",
      type: 'postgres',
      url: "postgres://yogacijnhfofzr:de1f762a72262f127363b016833c263d46d13a757582c84bc5b3bfd20b1933fe@ec2-3-211-221-185.compute-1.amazonaws.com:5432/d2frt1kfi7qglg",
      entities: [UserEntity, CollegeEntity, CommentsEntity],
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
    }),
    UserModule,
    CollegeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
