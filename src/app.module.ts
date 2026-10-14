import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './user/users.module.js';
import { ProductsModule } from './products/products.module.js';
import { OrderModule } from './order/order.module.js';
import { AdminController } from './admin/admin.controller.js';
import { AdminService } from './admin/admin.service.js';
import { AdminModule } from './admin/admin.module.js';


@Module({
  imports: [UsersModule, ProductsModule , OrderModule, AdminModule],
  controllers: [AppController, AdminController],
  providers: [AppService, AdminService],
})
export class AppModule {}
