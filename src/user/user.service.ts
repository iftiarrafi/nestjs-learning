import { ConflictException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema.js';
import { Model } from 'mongoose';
import { CreateUserDto } from './DTO/create-user.dto.js';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ){}

    async createUser(user : CreateUserDto){
        const userEmail = user.email

        const existingUser = await this.userModel.findOne({email:userEmail})

        if(existingUser) throw new ConflictException("This user already exists")
        
        const newUser = await this.userModel.create(user) 
 
        return { 
            success : true,
            message : "User is created",
            user : newUser
        }
    }

    async findAll(){
        return await this.userModel.find()
    }

    async findByEmail(email : string){
        return await this.userModel.findOne({email:email})
    }

    async findById(id : string){
        try {

        const user = await this.userModel.findById(id)

        if(!user) throw new NotFoundException("User not found")

        return user
            
        } catch (error) {
            throw new InternalServerErrorException('An unexpected error occurred')
        }
        
    }
}
