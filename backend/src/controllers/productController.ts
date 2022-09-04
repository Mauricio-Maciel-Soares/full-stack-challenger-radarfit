/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { IProduct } from '../interfaces/IProducts';

export default class ProductController {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor(private _service: IService<IProduct>) { }

  public async create(
    req: Request & { body: IProduct },
    res: Response<IProduct>,
  ) {
    const productBody = req.body;
    const results = await this._service.create(productBody);
    return res.status(201).json(results);
  }

  public async readSearch(req: Request, res: Response) {
    const { params } = req;

    const results = await this._service.readSearch(params);
    return res.status(200).json(results);
  }

  public async readOne(req: Request, res: Response<IProduct | null>) {
    const { id } = req.params;

    const results = await this._service.readOne(id);
    return res.status(200).json(results);
  }

  public async update(
    req: Request & { body: IProduct },
    res: Response<IProduct>,
  ) {
    const { id } = req.params;
    const updateBody = req.body;

    const result = await this._service.update(id, updateBody);
    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.delete(id);
    return res.status(204).json(result);
  }

  public async getAll(_req: Request, res: Response) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }
}
