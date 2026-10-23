import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './user/users.module.js';
import { ProductsModule } from './products/products.module.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LoggerMiddleware } from './middleware/logger/logger.middleware.js';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [  
    // 2. Initialize ConfigModule globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // 3. Use MongooseModule.forRootAsync to inject the ConfigService
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), // Change 'MONGO_URI' to match your .env variable name
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
