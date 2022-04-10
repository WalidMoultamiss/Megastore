import { pubsub } from "@config/pubsub";
import type { Resolvers } from "@generated/types";
import { Product, IProduct, Store, Category } from "@models/index";
import {io} from '../../config/apollo'

export const resolvers: Resolvers = {
  Query: {
    getAllProducts: (): any => {
      let products =  Product.find();
      // filter by viewed number

      products = products.sort({ viewed: -1 });
      return products;

      
      
    },
    //@ts-ignore
    getAllProductsWithPagination: (_: any, { inputs }: { inputs: any }): any => {
      return Product.find().limit(inputs.limit).skip(inputs.cursor);
    },
    //@ts-ignore
    getProductById: (_: any, { id }: { id: string }): any =>
      Product.findById(id),
      // @ts-ignore
    getProductByUuid: (_: any, { uuid }: { uuid: string }): any =>
      Product.findOne({ uuid }),

  },
  Mutation: {
    //@ts-ignore
    createProduct: async (_: any, { input }: { input: IProduct } ) => {


      // console.log(io);


      const uuid =
        input.name.toLowerCase().replace(/ /g, "-") +
        "-" +
        Math.random().toString(36).substring(2, 6);


      const product = new Product({
        ...input,
        uuid,
      });

      let chiData = await product.save();
      //add product id to store
      const store = await Store.findById(input.storeId);
      if (!store) {
        throw new Error("Store not found");
      }

      store.productIds.push(chiData.id);
      let newProduct = await store.save();

      const category = await Category.findById(input.categoryIds[0]);
      if (!category) {
        throw new Error("Category not found");
      }

      category.productIds.push(chiData.id);
      let newCategory = await category.save();

      return chiData;
    },
    // @ts-ignore
    addProductToStore: async (_: any, { input }: { input: any }) => {
      const { storeId, productIds } = input;
      const store = await Store.findById(storeId);
      if (!store) {
        throw new Error("Store not found");
      }
      store.productIds.push(...productIds);
      let chiData = await store.save();
      return chiData;
    },
    // @ts-ignore
    addViewed: async (_: any, { id }: { id: string }) => {
      const product = await Product.findById(id);
      if (!product) {
        throw new Error("Product not found");
      }
      product.viewed += 1;
      let chiData = await product.save();

      return chiData;
    },
    //@ts-ignore
    updateProduct: async (
      _: any,
      { id, input }: { id: string; input: IProduct }
    ) => {
      const product = await Product.findByIdAndUpdate(
        id,
        {
          ...input,
        },
        { new: true }
      );
      return product;
    },
    //@ts-ignore
    deleteProduct: async (_: any, { id }: { id: string }) => {
      const product = await Product.findByIdAndDelete(id);
      return product;
    }
  },
  Product: {
    storeId: async ({ storeId }) => {
      return await Store.findById(storeId);
    },
    categoryIds: async ({ categoryIds }) => {
      return await Category.find({ _id: { $in: categoryIds } });
    },
  },
};
