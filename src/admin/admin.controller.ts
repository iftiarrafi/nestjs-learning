import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service.js';

@Controller('admin')
export class AdminController {
    constructor(protected adminService : AdminService){}

    @Get()
    checkHealth(){
        return this.adminService.checkHealth()
    }

    @Post()
    createUser(@Body() body : any){
        return this.adminService.createUser(body)
    }

    @Post('create-user')
    createUser2(@Body('name') name : string){
        return {
            name
        }
    }
}
