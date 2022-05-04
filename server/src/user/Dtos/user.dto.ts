import { Expose } from "class-transformer";

export class UserDto{
    @Expose()
    id: number;
    @Expose()
    fname: string;
    @Expose()
    lname: string; 
    @Expose()
    username: string;
    @Expose()
    email: string;
}