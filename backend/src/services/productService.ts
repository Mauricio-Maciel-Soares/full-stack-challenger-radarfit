/* eslint-disable no-underscore-dangle */
import { isValidObjectId } from 'mongoose';
import { IService } from '../interfaces/IService';
import { IProduct } from '../interfaces/IProducts';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../catalogErrors/errors';

class ProductService implements IService<IProduct> {
  private _product: IModel<IProduct>;

  constructor(model: IModel<IProduct>) {
    this._product = model;
  }

  public async create(obj: IProduct): Promise<IProduct> {
    return this._product.create(obj);
  }

  public async read(): Promise<IProduct[]> {
    return this._product.read();
  }

  public async readSearch(p: any): Promise<IProduct[]> {
    return this._product.readSearch(p);
  }

  public async readOne(_id: string): Promise<IProduct | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);

    const product = await this._product.readOne(_id);

    if (!product) throw new Error(ErrorTypes.EntityNotFound);
    return product;
  }

  public async update(_id: string, obj: IProduct): Promise<IProduct | null> {
    // const parsed = ProductZodSchema.safeParse(obj);
    // if (!parsed.success) throw parsed.error;

    const updated = await this._product.update(_id, obj);
    if (!updated) throw new Error(ErrorTypes.EntityNotFound);

    return updated;
  }

  public async delete(_id: string): Promise<IProduct | null> {
    const deleted = await this._product.delete(_id);
    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);

    return deleted;
  }
}

export default ProductService;
