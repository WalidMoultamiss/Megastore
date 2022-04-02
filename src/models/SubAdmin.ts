import { Schema, model } from "mongoose";

export interface ISubAdmin {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token?: string;
}

const schema = new Schema<ISubAdmin>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String },
  },
  { timestamps: true }
);

export const SubAdmin = model<ISubAdmin>("SubAdmin", schema);
