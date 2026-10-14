import { Controller, Get } from "@nestjs/common";
import { OrderService } from "./order.service.js";


@Controller('/order')
export class OrderController {

    constructor( private orderService : OrderService){}
    //private orderService = new OrderService() // but this has problem, it is tightly coupled
    @Get()
    getOrders(){
        return this.orderService.getOrder()
    }
}