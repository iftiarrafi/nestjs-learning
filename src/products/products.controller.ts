import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
    constructor(private productService : ProductsService){}

    @Get()
    getProducts(@Query('page') page = 1,
                @Query('limit') limit = 10){
        return this.productService.getProduct(page , limit)
    }

    @Get('details')
    getDetails(
        @Query('city') city = "dhaka",
    ){
        return {city}
    }
}
