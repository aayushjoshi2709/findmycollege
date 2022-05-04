import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { CurrentUserInterceptor } from "./Interseptor/current-user.interceptor";
import { APP_INTERCEPTOR } from "@nestjs/core";
@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService, CurrentUserInterceptor,
    {
        provide: APP_INTERCEPTOR,
        useClass: CurrentUserInterceptor
    }
    ]
})
export class UserModule{
    
}