import { ConflictException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema.js';
import { Model } from 'mongoose';
import { CreateUserDto } from './DTO/create-user.dto.js';
import { NotFoundError } from 'rxjs';
import { UpdateUserDto } from './DTO/update-user.dto.js';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ) { }

    async createUser(user: CreateUserDto) {
        const userEmail = user.email

        const existingUser = await this.userModel.findOne({ email: userEmail })

        if (existingUser) throw new ConflictException("This user already exists")

        const newUser = await this.userModel.create(user)

        return {
            success: true,
            message: "User is created",
            user: newUser
        }
    }

    async findAll( page:number = 1 , limit:number =2 , 
        name?:string , 
        email?:string , 
        minAge?: number , 
        maxAge?: number ) {

        const filter : any = {}
        if (name) filter.name = { $regex : name , $options: 'i' }
        if (email) filter.email = { $regex : email , $options : 'i' }
        if (minAge !== undefined || maxAge !== undefined) {
            filter.age = {}
            if(minAge !== undefined) filter.age.$gte = minAge
            if(maxAge !== undefined) filter.age.$lte = maxAge
        }

        const skip = (page - 1) * limit

        return await this.userModel
        .find(filter)
        .skip(skip)
        .limit(limit)
        .exec()

    }

    async findByEmail(email: string) {
        const user = await this.userModel.findOne({ email: email })
        return user
    }

    async findById(id: string) {
        try {

            const user = await this.userModel.findById(id)
            if (!user) throw new NotFoundException("User not found")
            return user

        } catch (error) {
            throw new InternalServerErrorException('An unexpected error occurred')
        }

    }

    async updateUser(id: string, updateUserDto: UpdateUserDto) {

        const existingUser = await this.userModel.findById(id)

        if (!existingUser) throw new NotFoundException("User Id is in valid")

        const updatedUser = await this.userModel.findByIdAndUpdate(
            id,
            updateUserDto,
            { new: true }
        )
        return updatedUser

    }
    async deleteUser(id: string) {

        const existingUser = await this.userModel.findById(id)

        if (!existingUser) throw new NotFoundException("User Id is in valid")

        return await this.userModel.findByIdAndDelete(id)

    }
}
