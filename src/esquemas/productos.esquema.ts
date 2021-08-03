import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import internal from 'stream';

export type ProductosDocument = Productos & Document;

@Schema()
export class Productos {
  @Prop()
  nombre: string;

  @Prop()
  categoria: string;

  @Prop()
  precio: number;

}

export const ProductosSchema = SchemaFactory.createForClass(Productos);