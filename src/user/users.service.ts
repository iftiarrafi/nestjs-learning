import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{

    private users: any[] = []

    createUser(user:any){
        this.users.push(user)
        return {
            message : "User is created",
            data: user 
        }
    }

    getAllUser(){
        return {
            message : "Here are all users",
            count : this.users.length,
            data: this.users 
        }
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