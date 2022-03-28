import { Schema, model } from "mongoose";

export interface IAdmin {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token?: string;
}

const schema = new Schema<IAdmin>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const Admin = model<IAdmin>("Admin", schema);
