import { Router } from "express";
import {
  getAllAccounts,
  deleteAccountById,
  updateAccountById,
  createAccount,
} from "./accounts.controller";
export const accRouter = Router();

accRouter.get("/", getAllAccounts);

accRouter.post("/", createAccount);

accRouter.delete("/:accountId", deleteAccountById);

accRouter.put("/:accountId", updateAccountById);
