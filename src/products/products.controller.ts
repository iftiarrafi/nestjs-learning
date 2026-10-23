import { BadRequestException, Body, ConflictException, Controller, ForbiddenException, Get, HttpException, InternalServerErrorException, NotFoundException, Param, Post, Query, UnauthorizedException, UseFilters, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { HttpExceptionFilter } from '../common/filter/http-exception/http-exception.filter.js';
import { AuthGuard } from '../guards/auth/auth.guard.js';

@Controller('products')
@UseFilters(HttpExceptionFilter)
// @UseGuards(AuthGuard) : I can use in here too
export class ProductsController {
    constructor(private productService: ProductsService) { }


}
