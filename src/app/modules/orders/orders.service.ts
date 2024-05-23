import { Products } from '../products/products.interface';
import { orderModel } from './orders.model';

//create new order service
const createNewOrderIntoDB = async (products: Products) => {
  const result = await orderModel.create(products);
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

// const getAllOrdersFromDB = async () => {};

export const orderServices = {
  createNewOrderIntoDB,
  //getAllOrdersFromDB,
  getAllOrdersAndSearchQuery,
};
