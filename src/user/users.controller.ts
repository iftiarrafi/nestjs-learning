import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service.js";

@Controller('users')
export class UsersController{

    constructor( private usersService : UsersService){

    }

    @Get()
    getUser(){
        return this.usersService.getUser()
    }


    @Get('/profile')
    getProfile(){
        return this.usersService.getProfile()
    }
}