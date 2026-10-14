import { Module } from "@nestjs/common";
import { OrderService } from "./order.service.js";
import { OrderController } from "./order.controller.js";


@Module({
    imports:[],
    providers:[OrderService],
    controllers:[OrderController],
    exports:[],
})

export class OrderModule{}