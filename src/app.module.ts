import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './user/users.module.js';
import { ProductsModule } from './products/products.module.js';
import { OrderModule } from './order/order.module.js';
import { AdminModule } from './admin/admin.module.js';
import { GangModule } from './gang/gang.module.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [UsersModule, ProductsModule , OrderModule, AdminModule,GangModule , 
    ServeStaticModule.forRoot({
      rootPath: join(import.meta.dirname,'..','public')
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
