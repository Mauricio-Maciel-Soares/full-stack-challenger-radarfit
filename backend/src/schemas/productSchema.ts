import { z } from 'zod';

const ProductSchema = z.object({
  produto: z.string({
    required_error: 'Product name is required',
    invalid_type_error: 'Name must be a string',
  }).min(3, { message: 'Name should be greater than or equal to 3 characters' }),

  valor: z.number({
    required_error: 'Value is required',
    invalid_type_error: 'Value must be a number',
  })
    .nonnegative({ message: 'Value should a positive number' }),

  descrição: z.string({
    required_error: 'Description value is required',
    invalid_type_error: 'Description must be a string',
  }).min(10, { message: 'Description should be greater than or equal to 10 characters' }),

  created: z.date(),

  updated: z.date(),
});

export default ProductSchema;
