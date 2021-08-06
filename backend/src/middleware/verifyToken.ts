import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

export const verifyToken = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  // const authHeader = req.headers["authorization"];
  req.cookies.name = "secret";
  let token: string = req.cookies.secret || "";

  if (token == "") {
    res.status(401).json({ message: "unauthorize" });
  } else {
    Jwt.verify(
      token,
      <string>process.env.SECRET_TOKEN,
      (err: any, _encode: any) => {
        if (err) {
          const message =
            err.name === "JsonWebTokenError" ? "Unauthorized" : "expired";

          return res.status(403).json({ message: message });
        }

        return next();
      }
    );
  }

  // const token = authHeader.split(" ")[1];
};
