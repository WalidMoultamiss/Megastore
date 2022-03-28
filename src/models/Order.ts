import { Schema, model } from "mongoose";


export interface IOrder {
  userId: string;
  productId: string;
  quantity: string;
}



const OrderSchema = new Schema<IOrder>({
  userId: { type: String, required: true },
  productId: { type: String  },
  quantity:{type: String, required: true}
});

export const Order = model<IOrder>("Order", OrderSchema);
