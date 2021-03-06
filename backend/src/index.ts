import express from "express";
import route from "./routes/auth";
import profile from "./routes/profile";
import seller from "./routes/seller";
import redis from "redis";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import http from "http";
const app = express();

export const client = redis.createClient({
  host: "localhost",
  port: 6379,
  password: "redispassword123",
});

client.on("ready", () => {
  console.log("connected to redis");
});

app.use(
  cors({
    origin: "http://localhost:2002",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "../public/images/")));
app.use("/product", express.static(path.join(__dirname, "../public/product/")));
app.use("/", route);
app.use("/profile", profile);
app.use("/seller", seller);

app.listen("2021", () => {
  console.log("http://localhost:2021");
});
