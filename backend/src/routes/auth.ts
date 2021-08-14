import { Router } from "express";
import { login, signup, refreshToken, logout } from "../controller/auth";
import { rulesLogin, rulesSignup, validate } from "../middleware/validation";
import { getProduct } from "../controller/seller";

import { getCart, moveToChart } from "../controller/cart";

const route = Router();

route.get("/store/product", getProduct);
route.get("/product", getProduct);
route.get("/cart/:id", getCart);
// route.get("/")
route.post("/cart/:id/:product", moveToChart);
route.post("/signup", rulesSignup(), validate, signup);
route.post("/login", rulesLogin(), validate, login);
route.delete("/logout/:id", validate, logout);
route.get("/refreshToken", refreshToken);

export default route;
