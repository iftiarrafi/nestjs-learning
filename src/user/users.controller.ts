import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { UsersService } from "./users.service.js";
import { CreateUserDto } from "./dto/create-user.dto.js";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }


    @Post()
    createUser(@Body() createUserDto : CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }
    // Pipes are used mainly to convert data types , it can convert data types
    // of the params/query for convert it to something new before sending it to controller
    // Using Built-in Pipes : ParseIntPipe , ParseFloatPipe , ParseBoolPipe , ParseUUIDPipe

    @Get('products')
    getProducts( @Query("limit" , new DefaultValuePipe(10), ParseIntPipe) limit : number ){
        return {
            limit : limit
        }
    }

    @Get(':id')
    getUser(@Param('id' ,ParseIntPipe) id : number){
        return {
            id , type : typeof id
        }
    }

}