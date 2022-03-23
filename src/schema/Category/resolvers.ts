import type { Resolvers } from "@generated/types";
import { ICategory, Category, Product
} from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    getAllCategories: (): any => {
      return Category.find();
    },
  },
  Mutation: {
    //@ts-ignore
    createCategory: async (_: any, { input }: { input: ICategory }) => {
      const category = new Category({
        ...input,
      });
      let chiData = await category.save();
      return chiData;
    },
    //@ts-ignore
    updateCategory: async (_: any, { input }: { input: any }) => {
      const category = await Category.findByIdAndUpdate(input.id, {
        ...input,
      }, { new: true });
      return category;
    },
    //@ts-ignore
    addCategoryToProduct: async (_: any, { id, input }: {input: any }) => {
      const { categoryId, productIds } = input;
      const category = await Category.findById(categoryId);
      if (!category) {
        throw new Error("Category not found");
      }
      category.productIds.push(...productIds);
      let chiData = await category.save();
      return chiData;
    },
    //@ts-ignore
    addProductToCategory: async (_: any, { input }: { input: any }) => {
      const { categoryId, productIds } = input;
      const category = await Category.findById(categoryId);
      if (!category) {
        throw new Error("Category not found");
      }
      category.productIds.push(...productIds);
      let chiData = await category.save();
      return chiData;
    }

  },
  Category: {
    productIds: async ({ productIds }) => {
      return await Product.find({ _id: { $in: productIds } });
    },
  },
};
