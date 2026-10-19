import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service.js";
import { CreateUserDto } from "./dto/create-user.dto.js";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }


    @Post()
    createUser(@Body() createUserDto : CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }

    

}