import { Router } from "express";
import { addProduct, sellerRegister } from "../controller/seller";
import { verifyToken } from "../middleware/verifyToken";

const route = Router();

route.post("/:id/register", verifyToken, sellerRegister);
route.post("/:id/add", verifyToken, addProduct);

export default route;
