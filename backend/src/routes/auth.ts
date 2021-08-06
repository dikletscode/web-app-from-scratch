import { Router } from "express";
import { login, signup, refreshToken, logout } from "../controller/auth";
import { rulesLogin, rulesSignup, validate } from "../middleware/validation";

const route = Router();

route.post("/signup", rulesSignup(), validate, signup);
route.post("/login", rulesLogin(), validate, login);
route.get("/logout", validate, logout);
route.get("/refreshToken", refreshToken);

export default route;
