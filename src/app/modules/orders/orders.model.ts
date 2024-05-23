import { Schema, model } from "mongoose";
import { Orders } from "./orders.interface";

const ordersSchema = new Schema<Orders>({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
})

//Orders Model Data

export const orderModel = model<Orders>('Orders', ordersSchema);