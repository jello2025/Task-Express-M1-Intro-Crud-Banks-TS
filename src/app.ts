import express from "express";
import { accRouter } from "./api/accounts/accounts.routes";
import connectDb from "./db/connectDb";
const app = express();
connectDb();
const PORT = 8000;
app.use(express.json());
app.use("/accounts", accRouter);

app.listen(PORT, () => {
  console.log("it works YIPPEEE");
});
