import { Request, Response } from "express";
import Account from "../../db/models/Account";

export const getAllAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await Account.find();
    return res.json(accounts);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "error" });
  }
};

export const createAccount = async (req: Request, res: Response) => {
  try {
    const account = await Account.create(req.body);
    return res.status(201).json(account);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const updateAccountById = async (req: Request, res: Response) => {
  const { accountId } = req.params;

  try {
    const foundAcc = await Account.findById(accountId);

    if (foundAcc) {
      await foundAcc.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (err) {
    return res.status(404).json({
      message: "Not found",
    });
  }
};

export const deleteAccountById = async (req: Request, res: Response) => {
  const { accountId } = req.params;
  try {
    const foundAcc = await Account.findById(accountId);
    if (foundAcc) {
      await foundAcc.deleteOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (err) {
    return res.status(404).json({
      message: "Not found",
    });
  }
};
