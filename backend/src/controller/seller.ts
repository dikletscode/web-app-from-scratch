import { TermSeller } from "../types/type";
import { getDetail } from "../models/read";
import { changeRole } from "../models/update";
import { createTbSeller, createProduct } from "../models/create";
import { Request, Response } from "express";
import { Product } from "../types/type";

const isAdmin = (obj: object): boolean => {
  for (let [_key, value] of Object.entries(obj)) {
    if (value == null) {
      return false;
    }
  }
  return true;
};

export const addProduct = async (req: Request, res: Response) => {
  const product: Product = { ...req.body };
  const id = req.params.id;
  try {
    await createProduct(product, parseInt(id));
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error" });
  }
};

export const sellerRegister = async (req: Request, res: Response) => {
  let id = req.params.id;
  const termSeller: TermSeller = { ...req.body };
  let detail = await getDetail(parseInt(id));
  if (detail != null) {
    if (isAdmin(detail)) {
      try {
        await changeRole(detail.userId);
        await createTbSeller(termSeller, parseInt(id));
        res.status(200).json({
          message: "Congratulations, now you can sell your best product..",
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({ message: "error" });
      }
    } else {
      res
        .status(200)
        .json({ message: "you must complete your profile information" });
    }
  } else {
    res.status(400).json({ message: "error" });
  }
};
