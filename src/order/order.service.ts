import { Injectable } from "@nestjs/common";


@Injectable()
export class OrderService{

    getOrder(){
        let orders = [
            {
                "id":1,
                "issued":"12/12/12"
            },
            {
                "id":2,
                "issued":"1/1/12"
            },
        ]

        return orders
    }
}