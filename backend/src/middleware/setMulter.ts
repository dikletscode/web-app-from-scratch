import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, path.join(__dirname + "../../../public/images/"));
  },
  filename: (_req, file, callback) => {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const storageProduct = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, path.join(__dirname + "../../../public/product/"));
  },
  filename: (_req, file, callback) => {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage }).single("images");
export const uploadProduct = multer({ storage: storageProduct }).single(
  "images"
);
export default upload;
