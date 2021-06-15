import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MG_USERNAME}:${process.env.MG_PASSWORD}@catalog.vmvyv.mongodb.net/test`,
    ),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
