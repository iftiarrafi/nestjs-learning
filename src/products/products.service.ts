import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';

@Injectable()
export class ProductsService {

    products = [{ "id" : 101,"type": "phone", "brand" : "samsung"},
                { "id" : 102,"type": "car", "brand" : "bmw"},
                { "id" : 103,"type": "electronics","brand" : "apple"},]


    getProduct(){
        return {
           data : this.products
        }
    }
}
