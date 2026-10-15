import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    checkHealth(){
        return {
            "status" : "ok"
        }
    }

    createUser(body:any){
        return body
    }
}
