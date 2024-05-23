import express from "express";
import { ordersController } from "./orders.controller";

const router = express.Router();

//Routes of Create an order
router.post('/', ordersController.createOrder);

export const orderRoutes = router;