import { IsNotEmpty, IsString, MinLength } from "class-validator"



export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    type : string

    @IsString()
    @IsNotEmpty()
    brand : string

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description : string
}