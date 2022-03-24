import { Schema, model } from "mongoose";


export interface IBrand {
  name: string;
  description: string;
  image: string;
  productIds: string[];
}

const BrandSchema = new Schema<IBrand>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  productIds: [{ type: String  }],
});

export const Brand = model<IBrand>("Brand", BrandSchema);
