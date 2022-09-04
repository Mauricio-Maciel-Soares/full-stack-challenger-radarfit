import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(productRoutes);

export default app;
