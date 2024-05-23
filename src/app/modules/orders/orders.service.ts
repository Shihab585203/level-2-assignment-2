import { Products } from "../products/products.interface";
import { orderModel } from "./orders.model";

const createNewOrderIntoDB = async (products: Products) => {
    const result = await orderModel.create(products);
    return result;
}

export const orderServices = {
    createNewOrderIntoDB
}