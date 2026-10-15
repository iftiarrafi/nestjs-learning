import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    checkHealth(){
        return {
            "status" : "ok"
        }
    }

    createUser(body:any){
        const {password , ...userData} = body
        // it takes out password from body and groups all other items in userData
        return {
            success : true, // you can also write "success" : true, but js works file, it will auto be "success"
            message :"user created successfully",
            data: userData
        }
    }
}
