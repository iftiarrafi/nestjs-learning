import { Controller, Get } from '@nestjs/common';
import { GangService } from './gang.service.js';

@Controller('gang')
export class GangController {
    constructor(private gangService : GangService){}

    @Get()
    checkHealth(){
        return this.gangService.checkHealth()
    }
}
