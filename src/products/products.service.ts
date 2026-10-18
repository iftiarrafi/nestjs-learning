import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';

@Injectable()
export class ProductsService {

    products = [{ "id" : 101,"type": "phone", "brand" : "samsung"},
                { "id" : 102,"type": "car", "brand" : "bmw"},
                { "id" : 103,"type": "electronics","brand" : "apple"},]


    getProduct(page:number , limit:number){
        // return {
        //     "page" :  `Page No : ${page}`,
        //     "limit" :  `limit to : ${limit}`
        // }
        return {
            page,
            limit
        }
    }

    createProduct(createProductDto : CreateProductDto){
        const newProduct = {
            id : this.products.length + 1 , 
            ...createProductDto
        }
        return {
            message : "product is created",
            product : newProduct
        }
    }
}
