import { z } from "zod";

const ordersValidationSchema = z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number(),
    quantity: z.number().int().positive()
})

export default ordersValidationSchema;