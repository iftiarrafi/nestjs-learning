import { Injectable } from '@nestjs/common';

@Injectable()
export class GangService {
    checkHealth(){
        return {message:"ok"}
    }
}
