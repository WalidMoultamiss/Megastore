import { Schema, model } from "mongoose";


export interface ICategory {
  name: string;
  description: string;
  image: string;
  productIds: string[];
}

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  productIds: [{ type: String  }],
});

export const Category = model<ICategory>("Category", CategorySchema);
