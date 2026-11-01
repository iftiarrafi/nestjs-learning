import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './DTO/create-user.dto.js';
import { UpdateUserDto } from './DTO/update-user.dto.js';



@Controller('user')
export class UserController {
    constructor(private userService : UserService){}
    
    @Post('create-user')
    async createUser(@Body() createUserDto : CreateUserDto){
        return await this.userService.createUser(createUserDto)
    }

    @Get()
    async getAllUsers(
        @Query('page') page : string = "1",
        @Query('limit') limit : string = "3"
    ){
        return await this.userService.findAll(Number(page) , Number(limit))
    }

    @Get('search')
    async findByEmail(
        @Query('email')  email :string
    ){
        return await this.userService.findByEmail(email)
    }

    @Get(':id')
    async findUser(
        @Param('id') id : string
    ){  
        return await this.userService.findById(id)

    }

    // UPDATE
    @Patch(':id')
    async updateUser(
        @Param('id') id : string,
        @Body() updateUserDto : UpdateUserDto
    ){
        return this.userService.updateUser(id , updateUserDto)
    }

    // Delete

    @Delete(':id')
    async deleteUser(
        @Param('id') id : string
    ){
        return this.userService.deleteUser(id)
    }


}
