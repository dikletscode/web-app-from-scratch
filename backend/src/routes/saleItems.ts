import { createProduct } from "../controller/create";
import { Product } from "../model/type";
import { Router } from "express";

const route = Router();

route.post("/:id/add", async (req, res) => {
  const product: Product = { ...req.body };
  const id = req.params.id;
  try {
    await createProduct(product, parseInt(id));
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error" });
  }
});

export default route;
