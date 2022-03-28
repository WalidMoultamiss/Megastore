import { Role } from '@ts/enums';
import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  token?: string;
}



// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>(
  {
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String},
    password: { type: String},
    token: { type: String},
    role: {
      type: String,
    
      enum: Role,
      default: Role.USER,
    },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const User = model<IUser>("User", schema);
