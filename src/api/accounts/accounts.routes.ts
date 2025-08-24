import { Router } from "express";
import {
  getAllAccounts,
  deleteAccountById,
  updateAccountById,
  createAccount,
} from "./accounts.controller";
export const accRouter = Router();

accRouter.get("/accounts", getAllAccounts);

accRouter.post("/accounts", createAccount);

accRouter.delete("/accounts/:accountId", deleteAccountById);

accRouter.put("/accounts/:accountId", updateAccountById);
