import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './user/users.module.js';
import { ProductsModule } from './products/products.module.js';
import { OrderModule } from './order/order.module.js';


@Module({
  imports: [UsersModule, ProductsModule , OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
