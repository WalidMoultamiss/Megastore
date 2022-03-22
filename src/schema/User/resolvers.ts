import type { Resolvers } from '@generated/types';
import { User, IUser } from '@models/index';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';



export const resolvers: Resolvers = {
  Query: {
    hello: (): string => 'Hello world!',
  },
  Mutation: {
    register: async (
      _: any,
      { input }: { input: IUser }
    ): Promise<IUser> => {
      
      const { firstName, lastName, email, password, role } = input;
      const hashedPassword = await hash(password, 10);
      
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role,
      });

      let AyoCheck = await user.save();
      return user;
    }
  },
  login: async (
    _: any,
    { input }: { input: IUser }
  ): Promise<IUser> => {
    const { email, password } = input;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    const isValid = await user.validatePassword(password);
    if (!isValid) {
      throw new Error('Invalid password');
    }
    const token = sign({ userId: user.id }, 'secret', {
      expiresIn: '1h',
    });
    user.token = token;
    await user.save();
    return user;
  },
  getUserById: async (
    _: any,
    { id }: { id: string }
  ): Promise<IUser> => {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  },
};