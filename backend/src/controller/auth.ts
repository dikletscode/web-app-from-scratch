import { User, UserLogin } from "../types/type";
import { signupMessage, loginMessage } from "../response/auth";
import { Request, Response } from "express";
import { compare } from "../helper/compare";
import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "../helper/accessToken";
import bcrypt from "bcrypt";
import { createAccount } from "../models/create";
import { getAccount, getProfile } from "../models/read";

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

export const login = async (req: Request, res: Response) => {
  const user: UserLogin = { ...req.body };
  let account = await getAccount(user);
  if (account != null) {
    try {
      await compare(user.password, account.password);
      let profile: object = await getProfile(account.id);
      const token = await createAccessToken(account.id);
      const refreshToken = await createRefreshToken(account.id);
      res.status(200).json(loginMessage.success(profile, token, refreshToken));
    } catch (error) {
      console.log(error);
      res.status(401).json(loginMessage.failed("unauthorize"));
    }
  } else {
    res.status(401).json(loginMessage.failed("uknown account"));
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      res.status(401).json({ message: "unauthorize" });
    }
    const userId = await verifyRefreshToken(refreshToken);
    const accessToken = await createAccessToken(userId);
    const refreshTokens = await createRefreshToken(userId);
    res.json({ token: accessToken, refreshToken: refreshTokens });
  } catch (error) {
    res.json({ message: "error" });
    console.log(error, "refresh");
  }
};
