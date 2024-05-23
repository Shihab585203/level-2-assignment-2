import { Schema, model } from 'mongoose';
import { Inventory, Products, Variant } from './products.interface';

const variantSchema = new Schema<Variant>(
  {
    type: { type: String, required: true },
    value: { type: String, required: true },
  },
  {
    _id: false,
  },
);

const inventorySchema = new Schema<Inventory>(
  {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  {
    _id: false,
  },
);

const productsSchema = new Schema<Products>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});


//Products Model Data

export const productModel = model<Products>('Products', productsSchema);
