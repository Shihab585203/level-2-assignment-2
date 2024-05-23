import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { productRoutes } from './app/modules/products/products.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", productRoutes)

const getAController = (req: Request, res: Response) => {
  res.send('This app is running Smoothly!');
};

app.get('/', getAController);

export default app;
