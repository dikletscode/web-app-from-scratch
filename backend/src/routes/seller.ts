import { Router } from "express";
import { addProduct, getStore, sellerRegister } from "../controller/seller";
import { verifyToken } from "../middleware/verifyToken";

const route = Router();

route.post("/register/:id", verifyToken, sellerRegister);
route.post("/add/:id", verifyToken, addProduct);
route.get("/:id", verifyToken, getStore);
export default route;
