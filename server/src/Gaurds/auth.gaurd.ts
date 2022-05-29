import { CanActivate, ExecutionContext } from "@nestjs/common";
export class AuthGaurd implements CanActivate{
    canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest();
        console.log(request.session.userid)
        return parseInt(request.session.userid) > -1? true: false;
    }
}