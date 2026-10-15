import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
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
}
