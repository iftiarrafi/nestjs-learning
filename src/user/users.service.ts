import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{

    getUser(){
        return ["Hello" , "World" , "!"]
    }

    getProfile(id : string){
        return {
            "id" : `${id}`,
            "message" :"I am Rafi"
        }
    }

    getMyOrder(userId : string , orderId : string){
        return {
            "order_id" : `${orderId}`,
            "user_id" : `${userId}`
        }
    }
}