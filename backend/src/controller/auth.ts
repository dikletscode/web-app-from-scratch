import { User, UserLogin } from "../types/type";
import { signupMessage, loginMessage } from "../response/auth";
import { NextFunction, Request, Response } from "express";
import { compare } from "../helper/compare";
import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "../helper/accessToken";
import bcrypt from "bcrypt";
import { createAccount } from "../models/create";
import { getAccount } from "../models/read";
import { cookieOption } from "../helper/cookieOption";
import { client } from "../index";

require("dotenv").config();

export const signup = async (req: Request, res: Response) => {
  const user: User = { ...req.body };
  let hash = await bcrypt.hash(user.password, 10);
  try {
    await createAccount(user, hash);
    res.status(201).json(signupMessage.success());
  } catch (error) {
    console.log(error);
    res.status(409).json(signupMessage.failed(error));
  }
};

export const logout = async (req: Request, res: Response) => {
  let id = req.params.id;
  req.cookies.name = "secret";
  req.cookies.name = "refreshToken";
  res.clearCookie("secret");
  res.clearCookie("refreshToken");

  client.del(id, (err, ok) => {
    if (err) console.log(err);
    console.log(ok);
    ok == 1
      ? res.json({ message: "logout" })
      : res.status(404).json({ message: "error" });
  });
};

export const login = async (req: Request, res: Response) => {
  const user: UserLogin = { ...req.body };
  let account = await getAccount(user);

  if (account != null) {
    try {
      await compare(user.password, account.password);
      const token = await createAccessToken(account.id);
      const refreshToken = await createRefreshToken(account.id);
      let data: object;
      if (account.roleId == 2) {
        data = {
          id: account.id,
          cartId: account.cart?.id,
        };
      } else {
        data = {
          id: account.id,
          storeId: account.profile?.detailForSeller?.storeAdress?.id,
          cartId: account.cart?.id,
        };
      }
      var date = new Date();
      date.setTime(date.getTime() + 60 * 60 * 24 * 1000);
      res.cookie("secret", token, cookieOption);
      res.cookie("refreshToken", refreshToken, cookieOption);
      res.status(200).json(loginMessage.success(data));
    } catch (error) {
      console.log(error);
      res.status(401).json(loginMessage.failed("unauthorize"));
    }
  } else {
    res.status(401).json(loginMessage.failed("uknown account"));
  }
};

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.cookies.name = "refreshToken";
    const refreshToken: string = req.cookies.refreshToken;
    if (refreshToken == "") {
      console.log("asu");
      res.status(401).json({ message: "unauthorizess" });
    }
    const userId = await verifyRefreshToken(refreshToken);
    const accessToken = await createAccessToken(userId);
    const refreshTokens = await createRefreshToken(userId);
    res.cookie("secret", accessToken, cookieOption);
    res.cookie("refreshToken", refreshTokens, cookieOption);
    res.json({ message: "refresh" });
  } catch (error) {
    next(error);
  }
};
