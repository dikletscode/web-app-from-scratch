import { Router } from "express";
import { updateProfileImages, updateProfile } from "../controller/profile";
import { verifyToken } from "../middleware/verifyToken";

const route = Router();

route.patch("/update/image/:id", verifyToken, updateProfileImages);
route.patch("/update/:id", verifyToken, updateProfile);

export default route;
