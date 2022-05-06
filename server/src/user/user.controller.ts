import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Session,
  Res
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './Dtos/create-user.dto';
import { UpdateUserDto } from './Dtos/update-user.dto';
import { SignInUserDto } from './Dtos/signin-user.dto';
import { AuthGaurd } from 'src/Gaurds/auth.gaurd';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CurrentUser } from './Decorators/current-user.decorator';
import { Serialize } from './Interseptor/serialize.interceptor';
import { UserDto } from './Dtos/user.dto';
import { Response } from 'express';
@Serialize(UserDto)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
 
  // get all users
  @UseGuards(AuthGaurd)
  @Get()
  async getUser() {
    let users = await this.userService.getAllUser();
    return users;
  }
  @UseGuards(AuthGaurd)
  @Get('/current')
  async currentUser(@CurrentUser() user: UserEntity) {
    return user;
  }

  // delete a user
  @UseGuards(AuthGaurd)
  @Delete()
  deleteUser(@Res({ passthrough: true }) response: Response,@CurrentUser() user: UserEntity) {
    this.userService.removeUser(user.id);
    response.clearCookie('userid');
    return null;
  }

  // update user
  @UseGuards(AuthGaurd)
  @Patch()
  async updateUser(@CurrentUser() user: UserEntity, @Body() body: UpdateUserDto) {
    let res = await this.userService.updateUser(user.id, body);
    return res;
  }

  // create new user
  @Post()
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    let user = await this.userService.createUser(
      body.fname,
      body.lname,
      body.username,
      body.email,
      body.password,
    );
    session.userid = user.id;
    return user;
  }

  // signin
  @Post('signin')
  async signIn(@Session() session:any, @Body() body: SignInUserDto) {
    let user = await this.userService.signIn(body.username, body.password);
    session.userid = user.id;
    return user;
  }

  // signout
  @UseGuards(AuthGaurd)
  @Post('signout')
  signout( @Session() session: any) {
    session.userid = -1;
  }
}
