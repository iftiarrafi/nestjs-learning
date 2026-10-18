import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto.js";

@Injectable()
export class UsersService {

    private users: any[] = [
        { "id": 1, "name": "rafi", "email": "abc@gmail.com" , "age": 26, "city": "dhaka" },
        { "id": 2, "name": "alex", "email": "abc@gmail.com" , "age": 26, "city": "ny" },
        { "id": 3, "name": "bob", "email": "abc@gmail.com" , "age": 26, "city": "london" }];

    // createUser(user: any) {
    //     this.users.push(user)
    //     return {
    //         message: "User is created",
    //         data: user
    //     }
    // }
    createUser(createUserDto : CreateUserDto) {
        const newUser = {
            id : this.users.length + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return {
            message: "User is created",
            data: newUser
        }
    }

    getAllUser() {
        return {
            message: "Here are all users",
            count: this.users.length,
            data: this.users
        }
    }

    getProfile(id: Number) {
        let user = this.users.find((obj) => obj.id === id)
        //const {city , ...userInfo} = user for skipping city/password
        if (!user) {
            return {
                message: "No user found",
                data: null
            }
        }
        return {
            message: "user found",
            data: user
        }
    }


    updateUser(id: number, body: any) {
        const index = this.users.findIndex(user => user.id === id)
        if(index === -1){ return {message : "no user found"} }

        this.users[index]={
            id,
            ...body
        }

        return {
            message : "user update successful",
            data:this.users[index]
        }

    }
    patchUser(id: number, body: any) {
        const user = this.users.find(user => user.id === id)
        if(!user){ return {message : "no user found"} }

        Object.assign(user,body)

        return {
            message : "user update successfully",
            data:user
        }
    }

    deleteUser(id:number){
        const index = this.users.findIndex(user => user.id === id)

        if(index === -1) return {success:false , message : "No user found"}

        const user = this.users[index]

        this.users.splice(index,1)

        return {
            success:true,
            message : "user deleted successfully",
            data:user
        }
    }

    getMyOrder(userId: string, orderId: string) {
        return {
            "order_id": `${orderId}`,
            "user_id": `${userId}`
        }
    }
}