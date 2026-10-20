import { BadRequestException, Body, ConflictException, Controller, ForbiddenException, Get, HttpException, NotFoundException, Param, Post, Query, UnauthorizedException } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Get()
    getProducts() {
        return this.productService.getProduct()
    }

    // built-in exceptions : HttpException , BadRequestException , UnauthorizedException
    // ForbiddenException , NotFoundException , ConflictException , InternalServerErrorException
    
    @Get('test')
    testException(){
        throw new HttpException(
            "Something Went Wrong",
            400
        )
    }

    @Get('admin-dashboard')
    getAdminDashboard(){
        const isAdmin = false
        
        if(!isAdmin) throw new ForbiddenException("This dashboard is only for Admin")
        
        return {
            dashboard : "your dashboard"
        }
    }

    @Get(':productId')
    getProduct(@Param('productId') productId : string){

        const isAuth = true //false

        if(!isAuth){
            throw new UnauthorizedException("Please login first")
        }


        if( isNaN(Number(productId))) {
            throw new BadRequestException(
                "User ID must be a number"
            )
        }
        
        const productExists = false

        if(!productExists) throw new NotFoundException("The product is not found!")

        return {
            productId : productId
        }
    }

    @Post('create-product')
    createProduct(@Body() body : any){

        const productExists = true

        if(productExists) throw new ConflictException("This product already exists")

        return {
            message : "product is created"
        }
    }


    

}
