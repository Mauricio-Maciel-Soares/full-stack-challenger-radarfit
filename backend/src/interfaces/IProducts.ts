import { z } from 'zod';
import ProductZodSchema from '../schemas/productSchema';

export type IProduct = z.infer<typeof ProductZodSchema>;

export { ProductZodSchema };
