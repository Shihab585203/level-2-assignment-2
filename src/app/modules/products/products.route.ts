import express from 'express';
import { productController } from './products.controller';

const router = express.Router();
//Post a product
router.post('/', productController.addProducts);
//Get all data and search query
router.get('/', productController.getAllAndSearchProducts);
//Get Single Product
router.get('/:productId', productController.getSingleProduct);
//Update a Single Product Data
router.put('/:productId', productController.updateProduct);
//Delete a Data
router.delete('/:productId', productController.deleteProduct);

export const productRoutes = router;
