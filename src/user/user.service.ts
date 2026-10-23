import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema.js';
import { Model } from 'mongoose';
import { CreateUserDto } from './DTO/create-user.dto.js';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ){}

    async createUser(user : CreateUserDto){
        const userExists = user.email

        if(userExists) throw new 

        return this.userModel.create(user)
    }
}
