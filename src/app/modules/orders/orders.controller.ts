import { Request, Response } from "express";
import { orderServices } from "./orders.service";

//Controller control a new Order
const createOrder = async (req: Request, res: Response) => {
    try {
        const newOrder = req.body;

        const result = await orderServices.createNewOrderIntoDB(newOrder);

        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong!",
            error: error
        })
    }
}

export const ordersController = {
    createOrder
}