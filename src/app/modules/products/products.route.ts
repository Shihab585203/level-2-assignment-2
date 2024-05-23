import express from 'express';
import { productController } from './products.controller';

const router = express.Router();
//Post a product
router.post('/', productController.addProducts);
//Get all Products
router.get('/', productController.getAllProducts);
//Get Single Product
router.get('/:productId', productController.getSingleProduct);
//Update a Single Product Data
router.put('/:productId', productController.updateProduct);
//Delete a Data
router.delete('/:productId', productController.deleteProduct);

export const productRoutes = router;
