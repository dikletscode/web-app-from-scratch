import express from "express";
import route from "./routes/auth";
import profile from "./routes/profile";
import seller from "./routes/seller";
import product from "../src/routes/saleItems";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", route);
app.use("/profile", profile);
app.use("/seller", seller);
app.use("/store", product);
app.listen("2021", () => {
  console.log("http://localhost:2021");
});
