import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

export const verifyToken = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers["authorization"]) {
    res.status(401).json({ message: "unauthorize" });
  }
  const authHeader = req.headers["authorization"];
  console.log(authHeader);

  const token = authHeader.split(" ")[1];
  Jwt.verify(
    token,
    <string>process.env.SECRET_TOKEN,
    (err: any, encode: any) => {
      if (err) {
        const message =
          err.name === "JsonWebTokenError" ? "Unauthorized" : "Forbiden";
        return res.status(403).json({ message: message });
      }
      req.encode = encode;
      return next();
    }
  );
};
