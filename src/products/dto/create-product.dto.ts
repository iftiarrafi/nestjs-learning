import { IsNotEmpty, IsString } from "class-validator"



export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    type : string

    @IsString()
    @IsNotEmpty()
    brand : string
}