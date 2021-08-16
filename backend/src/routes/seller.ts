import { Router } from "express";
import { addProduct, getStore, sellerRegister } from "../controller/seller";
import { verifyToken } from "../middleware/verifyToken";
import { uploadProduct } from "../middleware/setMulter";

const route = Router();

route.post("/register/:id", verifyToken, sellerRegister);
route.post("/add/:id", verifyToken, uploadProduct, addProduct);
route.get("/:id", verifyToken, getStore);
export default route;
