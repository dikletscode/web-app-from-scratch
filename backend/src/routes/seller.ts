import { Router } from "express";
import { createTbSeller } from "../controller/create";
import { getDetail } from "../controller/read";
import { sellerRegister } from "../controller/update";
import { TermSeller } from "../model/type";
const route = Router();
const isAdmin = (obj: object): boolean => {
  for (let [_key, value] of Object.entries(obj)) {
    if (value == null) {
      return false;
    }
  }
  return true;
};

route.post("/register/:id", async (req, res) => {
  let id = req.params.id;
  const termSeller: TermSeller = { ...req.body };
  let detail = await getDetail(parseInt(id));
  if (detail != null) {
    await sellerRegister(detail.userId);
    if (isAdmin(detail)) {
      try {
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
});

export default route;
