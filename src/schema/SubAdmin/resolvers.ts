import type { Resolvers } from "@generated/types";
import { SubAdmin, ISubAdmin } from "@models/index";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export const resolvers: Resolvers = {
  Query: {
    // @ts-ignore
    getAllSubAdmins: async (): Promise<any> => await SubAdmin.find(),
  },
  Mutation: {
    //@ts-ignore
    registerSubAdmin: async (
      _: any,
      { input }: { input: ISubAdmin }
    ): Promise<ISubAdmin> => {
      const { firstName, lastName, email, password } = input;
      const hashedPassword = await hash(password, 10);
      const subAdmin = new SubAdmin({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      const token = sign({ SubAdminId: subAdmin.id }, "secret", {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      subAdmin.token = token;
      let AyoCheck = await subAdmin.save();
      return subAdmin;
    },
    //@ts-ignore
    login: async (
      _: any,
      { input }: { input: ISubAdmin }
    ): Promise<ISubAdmin> => {
      const { email, password } = input;
      const subAdmin = await SubAdmin.findOne({ email });
      if (!subAdmin) {
        throw new Error("SubAdmin not found");
      }
      const isValid = await compare(password!, subAdmin.password);
      if (!isValid) {
        throw new Error("Invalid password");
      }
      const token = sign({ SubAdminId: subAdmin.id }, "secret", {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      subAdmin.token = token;
      return subAdmin;
    },

    createAdmin: async (
      _: any,
      { input }: { input: ISubAdmin }
    ): Promise<ISubAdmin> => {
      const { firstName, lastName, email, password } = input;
      const hashedPassword = await hash(password, 10);
      const subAdmin = new SubAdmin({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      const token = sign({ SubAdminId: subAdmin.id }, "secret", {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      subAdmin.token = token;
      let AyoCheck = await subAdmin.save();
      return subAdmin;
    },
  },
};
