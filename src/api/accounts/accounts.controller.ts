import { Request, Response } from "express";
import { accounts } from "../../../data/accounts";

export const getAllAccounts = (req: Request, res: Response) => {
  return res.status(200).json(accounts);
};

export const createAccount = (req: Request, res: Response) => {
  const id: number = accounts.length ? accounts.length + 1 : 1;
  const funds = 0;
  const newAcc = { id, funds, ...req.body };
  accounts.push(newAcc);
  res.status(201).json(newAcc);
};

export const deleteAccountById = (req: Request, res: Response) => {
  const accountId: number = Number(req.params.accountId);
  console.log("GAHHH‼️‼️", accountId);
  const account = accounts.find((acc) => acc.id === +accountId);
  if (!account) {
    res.status(404).json({
      message: `couldnt delete account with id ${accountId} cus it doesnt even exist bruh`,
    });
  } else {
    res.sendStatus(204);
  }
};

export const updateAccountById = (req: Request, res: Response) => {
  const accountId: number = Number(req.params.accountId);
  const accountIndex = accounts.findIndex((acc) => acc.id === +accountId);

  if (accountIndex === -1) {
    return res.status(404).json({
      message: `couldnt delete account with id ${accountId} cus it doesnt even exist bruh`,
    });
  }

  accounts[accountIndex] = {
    ...accounts[accountIndex],
    ...req.body,
  };
  res.json(accounts[accountIndex]);
};
