import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './DTO/create-user.dto.js';



@Controller('user')
export class UserController {
    constructor(private userService : UserService){}
    
    @Post('create-user')
    async createUser(@Body() createUserDto : CreateUserDto){
        return await this.userService.createUser(createUserDto)
    }

    @Get()
    async getAllUsers(){
        return await this.userService.findAll()
    }

    @Get('find-by-email')
    async findByEmail(){
        return await this.userService.findByEmail("rafi2@rafi.com")
    }

    @Get(':id')
    async findUser(
        @Param('id') id : string
    ){  
        return await this.userService.findById(id)
    }

}
 