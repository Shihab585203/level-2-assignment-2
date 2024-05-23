// import { Types } from 'mongoose';
import { Products } from './products.interface';
import { productModel } from './products.model';

const addProductsIntoDB = async (products: Products) => {
  const result = await productModel.create(products);
  return result;
};

//Get All Products
const getAllProductsFromDB = async () => {
  const result = await productModel.find();
  return result;
};

//Get a single Products
const getSingleProductFromDB = async (id: string) => {
  const result = await productModel.findOne({ _id: id });
  return result;
};

//Update a Data by PUT method
const updateProductFromDB = async (id: string, updateData: object) => {
  const result = await productModel.findOneAndUpdate({ _id :id }, updateData, {
    new: true,
  });

  return result;
};

// Delete a Product Data
const deleteProductFromDB = async (id: string) => {
  const result = await productModel.deleteOne({ _id: id });
  return result;
};

export const productServices = {
  addProductsIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
