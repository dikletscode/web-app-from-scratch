import { body, validationResult } from "express-validator";

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
      body("email").isEmail(),
      body("password").notEmpty().isLength({ min: 6 }),
    ];
  };
export const validate = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(422).json({ message: "your input is invalid" });
};
