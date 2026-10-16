import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service.js";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    createUser(@Body() body: any) {
        return this.usersService.createUser(body)
    }

    @Get()
    getAllUser() {
        return this.usersService.getAllUser()
    }

    @Get(':id')
    getProfile(@Param('id') id: string) {
        return this.usersService.getProfile(Number(id))
    }

    // to update the whole resource : PUT

    @Put(':id')
    updateUser(
        @Param('id') id: string,
        @Body() body: any
    ) {
        return this.usersService.updateUser(Number(id), body)
    }

    // to partially update the resource : PATCH

    @Patch(':id')
    patchUser(
        @Param('id') id: string,
        @Body() body: any
    ) {
        return this.usersService.patchUser(Number(id), body)
    }

    @Delete(':id')
    deleteUser(
        @Param('id') id:string
    ){
        return this.usersService.deleteUser(Number(id))
    }

    // get users's order

    @Get(':userId/order/:orderId')
    getMyOrder(
        @Param('userId') userId: string,
        @Param('orderId') orderId: string
    ) {
        return this.usersService.getMyOrder(userId, orderId)
    }

    //@Post()

}