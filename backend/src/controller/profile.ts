import { Request, Response } from "express";
import upload from "../helper/setMulter";
import { Profile } from "../types/type";
import { editProfile, updateImage } from "../models/update";
import { messageUpdate } from "../response/profile";
import { getProfile } from "../models/read";

export const readProfile = async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    let profile = await getProfile(id);

    res.status(200).json({ result: profile });
  } catch (error) {
    res.status(400).json({ result: null });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  let id = req.params.id;
  let userInput: Profile = { ...req.body };
  try {
    await editProfile(userInput, parseInt(id));
    res.status(200).json(messageUpdate.success);
  } catch (error) {
    console.log(error);
    res.status(400).json(messageUpdate.failed);
  }
};

export const updateProfileImages = (req: Request, res: Response) => {
  let id = req.params.id;
  upload(req, res, async (err) => {
    try {
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
};
