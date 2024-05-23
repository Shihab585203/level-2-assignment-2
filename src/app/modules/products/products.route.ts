import express from 'express';
import { productController } from './products.controller';

const router = express.Router();
//Post a product
router.post('/', productController.addProducts);

//Get Single Product
router.get('/:productId', productController.getSingleProduct);
//Update a Single Product Data
router.put('/:productId', productController.updateProduct);
//Delete a Data
router.delete('/:productId', productController.deleteProduct);
router.get('/', productController.searchProduct)
//Get All items and search query
// router.get('/', (req, res) => {
//   const { searchTerm } = req.query;

//   if (searchTerm) {
//     //Search any items
//     productController.searchProduct(req, res);
//   } else {
//     //Get All Items
//     productController.getAllProducts(req, res);
//   }
// });

export const productRoutes = router;
