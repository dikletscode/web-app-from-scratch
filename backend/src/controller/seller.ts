import { TermSeller } from "../types/type";
import {
  getAllProduct,
  getDetail,
  getStoreId,
  getStoreInfo,
} from "../models/read";
import { changeRole } from "../models/update";
import { createTbSeller, createProduct } from "../models/create";
import { Request, Response } from "express";
import { Product } from "../types/type";
import { uploadProduct } from "../helper/setMulter";

const isAdmin = (obj: object): boolean => {
  for (let [_key, value] of Object.entries(obj)) {
    if (value == null) {
      return false;
    }
  }
  return true;
};

export const addProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  uploadProduct(req, res, async (err) => {
    try {
      if (err) {
        console.log(err);
      }
      if (req.file) {
        let data: Product = {
          productName: req.body.productName,
          price: parseInt(req.body.price),
          total: parseInt(req.body.total),
          images: req.file?.filename,
        };
        await createProduct(data, parseInt(id));
        res.status(201).json({ message: "Product added successfully" });
      } else {
        console.log(null);
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "error" });
    }
  });
};

export const getStore = async (req: Request, res: Response) => {
  const profileId = req.params.id;
  try {
    let data = await getStoreInfo(parseInt(profileId));
    res.json({ result: data });
  } catch (error) {
    res.json({ result: "err" });
    console.log(error);
  }
};
export const getProduct = async (_req: Request, res: Response) => {
  try {
    let data = await getAllProduct();
    res.json({ result: data });
  } catch (error) {
    res.json({ result: "err" });
    console.log(error);
  }
};

export const sellerRegister = async (req: Request, res: Response) => {
  let id = req.params.id;
  const termSeller: TermSeller = { ...req.body };
  let detail = await getDetail(parseInt(id));
  if (detail != null) {
    console.log(isAdmin(detail));
    if (isAdmin(detail)) {
      try {
        await changeRole(detail.userId);
        await createTbSeller(termSeller, parseInt(id));
        let data = await getStoreId(detail.id);
        res.status(200).json({
          message: "Congratulations, now you can sell your best product..",
          accept: true,
          result: {
            id: detail.userId,
            storeId: data?.storeAdress?.id,
          },
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({ message: "error" });
      }
    } else {
      res.status(200).json({
        message: "you must complete your profile information",
        accept: false,
      });
    }
  } else {
    res.status(400).json({ message: "error" });
  }
};
