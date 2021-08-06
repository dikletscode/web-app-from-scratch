import { Router } from "express";
import {
  updateProfileImages,
  updateProfile,
  readProfile,
} from "../controller/profile";
import { verifyToken } from "../middleware/verifyToken";

const route = Router();

route.get("/:id", verifyToken, readProfile);
route.patch("/update/image/:id", verifyToken, updateProfileImages);
route.patch("/update/:id", verifyToken, updateProfile);

export default route;
