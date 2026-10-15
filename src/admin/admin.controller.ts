import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { AdminService } from './admin.service.js';
import type { Response } from 'express';

@Controller('admin')
export class AdminController {
    constructor(protected adminService : AdminService){}

    @Get()
    @HttpCode(200)
    checkHealth(){
        return this.adminService.checkHealth()
    }

    @Post()
    @HttpCode(201)
    createUser(@Body() body : any){
        return this.adminService.createUser(body)
    }

    @Post('create-user')
    createUser2(@Body('name') name : string){
        return {
            name
        }
    }

    @Get('all')
    getAdmin(@Res() res : Response){
        res.status(200).json({
            success : true,
            message : "all your users!"
        })
    }

}
