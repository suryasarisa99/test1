import express from "express";
import dotenv from "dotenv";
dotenv.config();
import configExpress from "./config/config";
import initDatebase from "./config/db";

const app = express();
configExpress(app);
// initDatebase();

app.get("/", (req, res) => {
  res.send("Hello World new 2");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
