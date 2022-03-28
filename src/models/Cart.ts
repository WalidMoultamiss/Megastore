import { Schema, model } from "mongoose";


export interface ICart {
  userId: string;
  orderIds: string[];
}


const CartSchema = new Schema<ICart>({
  userId: { type: String, required: true },
  orderIds: [{ type: String  }],
});

export const Cart = model<ICart>("Cart", CartSchema);
