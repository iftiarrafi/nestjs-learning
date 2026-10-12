import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{

    getUser(){
        return ["Hello" , "World" , "!"]
    }

    getProfile(){
        return "Hello This is your profile\n"
    }
}