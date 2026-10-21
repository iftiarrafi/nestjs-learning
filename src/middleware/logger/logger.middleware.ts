import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("Hello I am middleware")
    console.log(`time : [${new Date().toISOString()}]\n${req.method} - ${req.originalUrl}`)
    next();
  }
}
