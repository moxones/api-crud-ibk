import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':nombre')
  findOne(@Param('nombre') nombre: string) {
    return this.productosService.findOne(nombre);
  }

  @Put(':nombre')
  update(@Param('nombre') nombre: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(nombre, updateProductoDto);
  }

  @Delete(':nombre')
  remove(@Param('nombre') nombre: string) {
    return this.productosService.remove(nombre);
  }
}
