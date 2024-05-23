import { Request, Response } from 'express';
import { productServices } from './products.service';
import productsValidationSchema from './products.validation';

const addProducts = async (req: Request, res: Response) => {
  try {
    const products = req.body;

    //Data validation using Zod

    const zodParsedData = productsValidationSchema.parse(products);

    //Controller will call service for post a data
    const result = await productServices.addProductsIntoDB(zodParsedData);

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

//get All products and Search data

const getAllAndSearchProducts = async (req: Request, res: Response) => {
  const { searchTerm } = req.query as { searchTerm?: string };

  try {
    if (searchTerm) {
      //Get Searched Data
      const SearchResult =
        await productServices.getAllProductsAndSearchFromDB(searchTerm);
      res.status(200).json({
        success: true,
        message: `Products matching search term ${searchTerm} fetched successfully!`,
        data: SearchResult,
      });
    } else {
      // Fetch all products
      const getAllResult =
        await productServices.getAllProductsAndSearchFromDB();
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: getAllResult,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: error,
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
  const { productId } = req.params;
  const updateData = req.body;

  try {
    const result = await productServices.updateProductFromDB(
      productId,
      updateData,
    );

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
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const productController = {
  addProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getAllAndSearchProducts,
};