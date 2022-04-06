import { pubsub } from "@config/pubsub";
import type { Resolvers } from "@generated/types";
import { User, IUser, Store } from "@models/index";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";


export const resolvers: Resolvers = {
  Query: {
    hello: (): string => "Hello world!",
    getAllUsers: (): any => User.find(),
  },
  Mutation: {
    //@ts-ignore
    register: async (_: any, { input }: { input: IUser }): Promise<IUser> => {
      const { firstName, lastName, email, password, role } = input;
      const hashedPassword = await hash(password, 10);

      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role,
      });
      const token = sign({ userId: user.id, role: user.role }, "secret", {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      user.token = token;

      let AyoCheck = await user.save();
      return user;
    },
    //@ts-ignore
    login: async (_: any, { input }: { input: IUser }): Promise<IUser> => {
      const { email, password } = input;
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }

      const isValid = await compare(password!, user.password);
      if (!isValid) {
        throw new Error("Invalid password");
      }

      //get store
      const store = await Store.findOne({ userId: user.id });
      if (!store) {
        user.store = "not found";
      } else {
        user.store = store;
      }

      const token = sign({ userId: user.id, role: user.role }, "secret", {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });

      //send socket
      


      user.token = token;
      return user;
    },
  },
  Subscription: {
    userLoggedIn: {
      subscribe: (_: any, __: any, { pubsub }: any): any => {
        return pubsub.asyncIterator("userLoggedIn");
      },
    },
  },
};
