import { Router } from "express";
import { login, signup, refreshToken, logout } from "../controller/auth";
import { rulesLogin, rulesSignup, validate } from "../middleware/validation";
import { getProduct } from "../controller/seller";

const route = Router();

route.get("/product", getProduct);
route.post("/signup", rulesSignup(), validate, signup);
route.post("/login", rulesLogin(), validate, login);
route.get("/logout/:id", validate, logout);
route.get("/refreshToken", refreshToken);

export default route;
