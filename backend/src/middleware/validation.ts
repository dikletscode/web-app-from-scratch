import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const rulesSignup = () => {
  return [
    body("username").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").notEmpty().isLength({ min: 6 }),
  ];
};
export const rulesLogin = () => {
  return [
    body("username").isLength({ min: 5 }),
    body("password").notEmpty().isLength({ min: 6 }),
  ];
};
export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(422).json({ message: "your input is invalid" });
};
