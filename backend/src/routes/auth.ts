import { Request, Response, Router } from "express";
import { createAccount } from "../controller/create";
import { getAccount, getProfile } from "../controller/read";
import { compare } from "../helper/compare";

import { rulesSignup, validate } from "../middleware/validation";
import { User, UserLogin } from "../model/type";
import { signup, login } from "../response/auth";

const route = Router();

route.post(
  "/signup",
  rulesSignup(),
  validate,
  async (req: Request, res: Response) => {
    const user: User = { ...req.body };
    try {
      await createAccount(user);
      res.status(201).json(signup.success());
    } catch (error) {
      res.status(409).json(signup.failed(error));
    }
  }
);

route.post("/login", async (req, res) => {
  const user: UserLogin = { ...req.body };
  let account = await getAccount(user);
  if (account != null) {
    try {
      await compare(user.password, account.password);
      let profile: object = await getProfile(account.userId);
      res.status(200).json(login.success(profile));
    } catch (error) {
      res.status(401).json(login.failed("unauthorize"));
    }
  } else {
    res.status(401).json(login.failed("uknown account"));
  }
});

export default route;
