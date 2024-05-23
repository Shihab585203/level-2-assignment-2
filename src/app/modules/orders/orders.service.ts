import { productModel } from '../products/products.model';
import { Orders } from './orders.interface';
import { orderModel } from './orders.model';

//create new order service
const createNewOrderIntoDB = async (order: Orders) => {
  const existProducts = await productModel.findById(order.productId);
  
  if(!existProducts){
    throw new Error("Product not found")
  }

  const result = await orderModel.create(order);
  return result;
};

//Get all orders data search query
const getAllOrdersAndSearchQuery = async (query?: string) => {
  if (query) {
    const trimmedQuery = query.trim();
    const $regex = new RegExp(trimmedQuery, 'i');

    const result = orderModel.find({
      $or: [{ email: $regex }],
    });

    return result;
  } else {
    const result = await orderModel.find();
    return result;
  }
};


export const orderServices = {
  createNewOrderIntoDB,
  getAllOrdersAndSearchQuery,
};
