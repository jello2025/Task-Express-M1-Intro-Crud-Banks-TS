import { model, Schema } from "mongoose";

const AccountSchema = new Schema(
  {
    username: { type: String, required: true },
    funds: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Account = model("Account", AccountSchema);

export default Account;
