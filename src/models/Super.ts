import { Schema, model } from "mongoose";
import { Status } from "@ts/enums";

export interface ISuper {
  id: string;
  name: string;
  email: string;
  password: string;
  status: string;
}

const schema = new Schema<ISuper>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true , unique: true},
    password: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: Status,
        default: "ACTIVE",
    }
  },
  { timestamps: true }
);

export const Super = model<ISuper>("Super", schema);
