import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [ProductosModule, MongooseModule.forRoot('mongodb://localhost/nuevaBDNoRelacional')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
