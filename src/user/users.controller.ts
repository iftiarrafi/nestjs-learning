import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service.js";

@Controller('users')
export class UsersController{

    constructor( private usersService : UsersService){}

    @Post()
    createUser(@Body() body : any){
        return this.usersService.createUser(body)
    }

    @Get()
    getAllUser(){
        return this.usersService.getAllUser()
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

    //@Post()

}