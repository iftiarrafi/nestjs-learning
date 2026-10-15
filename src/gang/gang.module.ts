
import { Module } from '@nestjs/common';
import { GangController } from './gang.controller.js';
import { GangService } from './gang.service.js';

@Module({
    providers:[GangService],
    controllers:[GangController]
})
export class GangModule{}