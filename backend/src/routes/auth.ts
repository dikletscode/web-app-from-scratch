import { Router } from "express";
import { login, signup, refreshToken } from "../controller/auth";
import { rulesSignup, validate } from "../middleware/validation";

const route = Router();

route.post("/signup", rulesSignup(), validate, signup);
route.post("/login", login);
route.post("/refreshToken", refreshToken);

export default route;
