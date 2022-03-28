import type { Resolvers } from "@generated/types";
import { Admin, IAdmin } from "@models/index";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export const resolvers: Resolvers = {
  Query: {
    getAllAdmins: async (): Promise<any> => await Admin.find(),
  },
  Mutation: {
    //@ts-ignore
    registerAdmin: async (
      _: any,
      { input }: { input: IAdmin }
    ): Promise<IAdmin> => {
      const { firstName, lastName, email, password } = input;
      const hashedPassword = await hash(password, 10);
      const admin = new Admin({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      const token = sign({ AdminId: admin.id }, "secret", {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      admin.token = token;
      let AyoCheck = await admin.save();
      return admin;
    },
    //@ts-ignore
    login: async (_: any, { input }: { input: IAdmin }): Promise<IAdmin> => {
      const { email, password } = input;
      const admin = await Admin.findOne({ email });
      if (!admin) {
        throw new Error("Admin not found");
      }
      const isValid = await compare(password!, admin.password);
      if (!isValid) {
        throw new Error("Invalid password");
      }
      const token = sign({ AdminId: admin.id }, "secret", {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      admin.token = token;
      return admin;
    },
  },
};
