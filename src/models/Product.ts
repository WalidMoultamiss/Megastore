import { Schema, model } from "mongoose";
import { IStatus } from "@ts/enums";


export interface IProduct {
  name: string;
  description: string;
  uuid: string;
  image: string[];
  price: string;
  promoPrice: string;
  storeId: string;
  categoryIds: string[];
  stock: string;
  createdAt: string;
  status: string;
}



const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: [String], required: false , default : [] },
  uuid: { type: String, required: false },
  price: { type: String, required: true },
  storeId: { type: String, required: true },
  categoryIds: { type: [String] },
  stock: { type: String, required: true },
  promoPrice: { type: String, required: false },
  status: { type: String, default: "ACTIVE" },
  createdAt: { type: String, default: ''+Date.now() }
});

export const Product = model<IProduct>("Product", ProductSchema);
