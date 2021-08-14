// import { storeInfo } from "@prisma/client";

import { Request, Response } from "express";
import { addToCart } from "../models/create";
// import { updateCart } from "../models/update";
import { myCart } from "../models/read";

// import { Store } from "../types/type";

export const getCart = async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    let datas = await myCart(parseInt(id));
    res.json({ result: datas?.product });
    console.log(datas);
  } catch (error) {
    res.json({ result: null });
    console.log(error);
  }
};

export const moveToChart = async (req: Request, res: Response) => {
  let id = req.params.id;
  let productId = req.params.product;
  try {
    await addToCart(productId, parseInt(id));
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: "failed" });
    console.log(error);
  }
};
