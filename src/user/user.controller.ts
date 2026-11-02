import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './DTO/create-user.dto.js';
import { UpdateUserDto } from './DTO/update-user.dto.js';
import { PagePipe } from '../pipe/page/page.pipe.js';
import { LimitPipe } from '../pipe/limit/limit.pipe.js';



@Controller('user')
export class UserController {
    constructor(private userService : UserService){}
    
    @Post('create-user')
    async createUser(@Body() createUserDto : CreateUserDto){
        return await this.userService.createUser(createUserDto)
    }

    @Get()
    async findAll(
        @Query('name') name?: string ,
        @Query('email') email?: string ,
        @Query('minAge') minAge?: string ,
        @Query('maxAge') maxAge?: string ,
        @Query('page' , PagePipe) page: number = 1,
        @Query('limit' , LimitPipe) limit: number = 2,
    ){
        return await this.userService.findAll(
            page,
            limit,
            name,
            email,
            minAge? Number(minAge) : undefined ,
            maxAge? Number(maxAge) : undefined ,
            
        ) 
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
