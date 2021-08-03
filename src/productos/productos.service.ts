import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Productos, ProductosDocument } from 'src/esquemas/productos.esquema';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(@InjectModel(Productos.name) private productoModel: Model<ProductosDocument>) {}
  async create(createProductoDto: CreateProductoDto):Promise<Producto> {
    return new this.productoModel(createProductoDto).save();
  }

  findAll() {
    return this.productoModel.find();
  }

  findOne(nombre: string) {
    return this.productoModel.findOne({ nombre })
  }

  update(nombre: string, updateProductoDto: UpdateProductoDto) {
    return this.productoModel.updateOne({ nombre }, {$set:{...updateProductoDto}})
  }

  remove(nombre: string) {
    return this.productoModel.deleteOne({nombre});
  }
}
