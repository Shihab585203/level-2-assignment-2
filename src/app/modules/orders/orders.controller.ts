import { Request, Response } from 'express';
import { orderServices } from './orders.service';
import ordersValidationSchema from './orders.validation';

//Controller control a new Order
const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = req.body;

    //Data validation using Zod

    const zodParsedData = ordersValidationSchema.parse(newOrder);

    const result = await orderServices.createNewOrderIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product does not matched!',
      error: error,
    });
  }
};

//Controller control to get all orders

const allOrdersNSearchController = async (req: Request, res: Response) => {
  const { email } = req.query as { email?: string };

  try {
    if (email) {
      //Controller of get searched data by email query
      const searchResult =
        await orderServices.getAllOrdersAndSearchQuery(email);

      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: searchResult,
      });
    } else {
      //controller of get All data
      const result = await orderServices.getAllOrdersAndSearchQuery();

      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong!',
      error: error,
    });
  }
};

export const ordersController = {
  createOrder,
  allOrdersNSearchController,
};
