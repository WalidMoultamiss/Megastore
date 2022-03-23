import { Schema, model } from "mongoose";
import {IProduct} from "@models/Product";

export interface IStore {
  name: string;
  address: string;
  phone: string;
  description: string;
  image: string;
  userId: string;
  productIds: string[];
}



const StoreSchema = new Schema<IStore>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  userId: { type: String, required: true },
  productIds: { type: [String]},
});

export const Store = model<IStore>("Store", StoreSchema);
