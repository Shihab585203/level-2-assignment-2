import { Request, Response } from 'express';
import { productServices } from './products.service';

const addProducts = async (req: Request, res: Response) => {
  try {
    const products = req.body;

    //Controller will call service for post a data
    const result = await productServices.addProductsIntoDB(products);

    //Send Response
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went wrong!',
      error: error,
    });
  }
};

//Controller controls to get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong!',
    });
  }
};

//Controller controls to get a single product

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong!',
    });
  }
};

//update
const updateProduct = async (req: Request, res: Response) => {
    const  { productId }  = req.params;
    const updateData = req.body;
    
    try {

      const result = await productServices.updateProductFromDB(productId, updateData);
  
      res.status(200).json({
        success: true,
        message: 'Product updated successfully!',
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Something Went Wrong!',
      });
    }
  };

  //delete data

  const deleteProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      
      const result = await productServices.deleteProductFromDB(productId);
  
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        data:  null,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: err,
      });
    }
  };

  //search data

  const searchProduct = async (req: Request, res: Response) => {
    const { searchTerm } = req.query as {searchTerm: string};
    try {
        const result = await productServices.searchProductFromDB(searchTerm);

        res.status(200).json({
            success: true,
            message: 'Products matching search term phone fetched successfully!!',
            data:  result,
          });
        } catch (err) {
          res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
          });
        }
    }

export const productController = {
  addProducts,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProduct
};
