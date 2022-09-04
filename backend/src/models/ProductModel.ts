import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IProduct } from '../interfaces/IProducts';
import MongoModel from './MongoModel';

const ProductMongooseSchema = new Schema<IProduct>({
  produto: String,
  valor: String,
  descrição: String,
  created: Date,
  updated: Date,
});

class Product extends MongoModel<IProduct> {
  constructor(model = mongooseCreateModel('Products', ProductMongooseSchema)) {
    super(model);
  }
}

export default Product;
