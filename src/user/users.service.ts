import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{

    getUser(){
        return ["Hello" , "World" , "!"]
    }

    getProfile(){
        return {
            "id" : 100,
            "message" :"I am Rafi"
        }
    }
}