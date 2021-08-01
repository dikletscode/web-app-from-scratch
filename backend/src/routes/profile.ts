import { Router } from "express";
import { updateImage, updateProfile } from "../controller/update";
import { Profile } from "../model/type";
import { messageUpdate } from "../response/profile";
import upload from "../helper/setMulter";

const route = Router();

route.patch("/update/image/:id", async (req, res) => {
  let id = req.params.id;
  upload(req, res, async (err) => {
    try {
      console.log(err);
      let nameImages: Profile["images"] = req.file?.filename;
      if (nameImages != undefined) {
        await updateImage(nameImages, parseInt(id));
        res.status(200).json(messageUpdate.success);
      } else {
        await updateImage("", parseInt(id));
      }
    } catch (error) {
      console.log(err);
      res.status(400).json(messageUpdate.failed);
    }
  });
});

route.patch("/update/:id", async (req, res) => {
  let id = req.params.id;
  let userInput: Profile = { ...req.body };
  try {
    await updateProfile(userInput, parseInt(id));
    res.status(200).json(messageUpdate.success);
  } catch (error) {
    console.log(error);
    res.status(400).json(messageUpdate.failed);
  }
});

export default route;
