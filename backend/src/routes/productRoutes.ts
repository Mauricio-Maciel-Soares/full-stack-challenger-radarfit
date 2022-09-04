import { Router } from 'express';
import ProductModel from '../models/ProductModel';
import ProductService from '../services/productService';
import ProductController from '../controllers/productController';
// import isValidObject from '../middlewares/errorZodObject';
// import { ProductZodSchema } from '../interfaces/IProducts';

const route = Router();

const product = new ProductModel();
const productService = new ProductService(product);
const productController = new ProductController(productService);

route.post('/produtos', (req, res) => productController.create(req, res));
route.get('/produtos/find', (req, res) => productController.readSearch(req, res));
route.get('/produtos/:id', (req, res) => productController.readOne(req, res));
route.patch('/produtos/:id', (req, res) => productController.update(req, res));
route.delete('/produtos/:id', (req, res) => productController.delete(req, res));
route.get('/produtos', (req, res) => productController.getAll(req, res));
route.put('produtos/:id', (req, res) => productController.update(req, res));

export default route;
