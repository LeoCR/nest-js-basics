import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from '@services/products/products.service';
import { ParseIntCustomPipe } from '@common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '@dtos/products.dtos';
import { Public } from '@common/constants';

@Controller('products') // 👈 Route
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAlls(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Public()
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED) // 👈 Using decorator
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntCustomPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
