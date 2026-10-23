import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { UsersService } from "./users.service.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { UppercasePipe } from "../pipe/uppercase/uppercase.pipe.js";
import { AgePipe } from "../pipe/age/age.pipe.js";
import { TrimPipe } from "../pipe/trim/trim.pipe.js";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

}