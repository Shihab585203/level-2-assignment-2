import express from "express";
import { ordersController } from "./orders.controller";

const router = express.Router();

//Routes of Create an order
router.post('/', ordersController.createOrder);
//Routes of Get All Orders Data and Search Query
router.get('/', ordersController.allOrdersNSearchController);

export const orderRoutes = router;