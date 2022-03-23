import { Schema, model } from "mongoose";


export interface IProduct {
  name: string;
  description: string;
  image: string;
  price: string;
  storeId: string;
}



const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  storeId: { type: String, required: true },
});

export const Product = model<IProduct>("Product", ProductSchema);
