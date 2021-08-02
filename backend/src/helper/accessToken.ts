import { sign } from "jsonwebtoken";
require("dotenv").config();

export const createAccessToken = (id: string) => {
  console.log(<string>process.env.SECRET_TOKEN);
  return sign({ id: id }, <string>process.env.SECRET_TOKEN);
};
