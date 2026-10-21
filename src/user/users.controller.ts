import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { UsersService } from "./users.service.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { UppercasePipe } from "../pipe/uppercase/uppercase.pipe.js";
import { AgePipe } from "../pipe/age/age.pipe.js";
import { TrimPipe } from "../pipe/trim/trim.pipe.js";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getAllUsers(){
        return this.usersService.getAllUser()
    }
    
    // // custom pipe

    // @Get('name/:name')
    // getUserName(
    //     @Param('name' ,UppercasePipe) name : string
    // ){
    //     return {
    //         name:name,
    //         type: typeof name
    //     }
    // }
    // @Get('age/:age')
    // getUserAge(
    //     @Param('age' ,AgePipe) age : number
    // ){
    //     return {
    //         age : age,
    //         type: typeof age
    //     }
    // }

    // @Get('search')
    // searchUser(
    //     @Query('name' , TrimPipe) name : string
    // ){
    //     return {
    //         name : name
    //     }
    // }

    // // Pipes are used mainly to convert data types , it can convert data types
    // // of the params/query for convert it to something new before sending it to controller
    // // Using Built-in Pipes : ParseIntPipe , ParseFloatPipe , ParseBoolPipe , ParseUUIDPipe

    // @Get('products')
    // getProducts( @Query("limit" , new DefaultValuePipe(10), ParseIntPipe) limit : number ){
    //     return {
    //         limit : limit
    //     }
    // }

    // @Get(':id')
    // getUser(@Param('id' ,ParseIntPipe) id : number){
    //     return {
    //         id , type : typeof id
    //     }
    // }

}