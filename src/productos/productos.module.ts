import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Productos, ProductosSchema } from 'src/esquemas/productos.esquema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Productos.name, schema: ProductosSchema }])],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
