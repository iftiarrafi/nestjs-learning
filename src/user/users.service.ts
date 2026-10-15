import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {

    private users: any[] = [{ "id": 1, "name": "rafi", "age": 26, "city": "dhaka" }, { "id": 2, "name": "alex", "age": 26, "city": "ny" }, { "id": 3, "name": "bob", "age": 26, "city": "london" }];

    createUser(user: any) {
        this.users.push(user)
        return {
            message: "User is created",
            data: user
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

    getMyOrder(userId: string, orderId: string) {
        return {
            "order_id": `${orderId}`,
            "user_id": `${userId}`
        }
    }
}