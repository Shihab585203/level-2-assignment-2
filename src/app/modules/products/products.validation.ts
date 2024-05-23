import { z } from "zod";

// Define Zod Validation schema for Variant
const variantValidationSchema = z.object({
    type: z.string(),
    value: z.string(),
  });
  
  // Define Zod Validation schema for Inventory
  const inventoryValidationSchema = z.object({
    quantity: z.number(),
    inStock: z.literal(true),
  });
  
  // Define Zod Validation schema for Products
  const productsValidationSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(variantValidationSchema),
    inventory: inventoryValidationSchema,
  });

  export default productsValidationSchema;

