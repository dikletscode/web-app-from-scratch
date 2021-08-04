import express from "express";
import route from "./routes/auth";
import profile from "./routes/profile";
import seller from "./routes/seller";
import redis from "redis";
const app = express();

export const client = redis.createClient({
  host: "localhost",
  port: 6379,
  password: "redispassword123",
});
client.on("ready", () => {
  console.log("connected to redis");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", route);
app.use("/profile", profile);
app.use("/seller", seller);

app.listen("2021", () => {
  console.log("http://localhost:2021");
});
