import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service.js";

@Controller('users')
export class UsersController{

    constructor( private usersService : UsersService){}

    @Get()
    getUser(){
        return this.usersService.getUser()
    }


    @Get(':id')
    getProfile(@Param('id') id : string ){
        return this.usersService.getProfile(id)
    }

    // get users's order

    @Get(':userId/order/:orderId')
    getMyOrder(
        @Param('userId') userId : string,
        @Param('orderId') orderId : string
    ){
        return this.usersService.getMyOrder(userId , orderId)
    }
}