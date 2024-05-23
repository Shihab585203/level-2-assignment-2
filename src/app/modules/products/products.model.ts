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
//   isDeleted: { type: Boolean, default: false }
});

//Delete query middleware

// productsSchema.pre('find', function(next){
//     this.find({ isDeleted: {$ne: true }})
//     next();
// })

// productsSchema.pre('findOne', function(next){
//     this.find({ isDeleted: {$ne: true} })
//     next();
// })

// productsSchema.pre('aggregate', function(next){
//     this.pipeline().unshift({ $match: { isDeleted: { $ne: true} } })
//     next();
// })



//Model Data

export const productModel = model<Products>('Products', productsSchema);
