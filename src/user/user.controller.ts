import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './DTO/create-user.dto.js';



@Controller('user')
export class UserController {
    constructor(private userService : UserService){}
    
    @Post('create-user')
    async createUser(@Body() createUserDto : CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

}
