import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../config/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Brand = {
  __typename?: 'Brand';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productIds?: Maybe<Array<Maybe<Product>>>;
};

export type BrandInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type BrandProductInput = {
  brandId?: InputMaybe<Scalars['ID']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Cart = {
  __typename?: 'Cart';
  id?: Maybe<Scalars['ID']>;
  orderIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  userId: User;
};

export type CartInput = {
  orderIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  userId: Scalars['ID'];
};

export type Category = {
  __typename?: 'Category';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productIds?: Maybe<Array<Maybe<Product>>>;
};

export type CategoryInput = {
  categoryId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CategoryProductInput = {
  categoryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  productIds?: InputMaybe<Scalars['ID']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBrandToProduct?: Maybe<Product>;
  addCategoryToProduct?: Maybe<Product>;
  addOrderToOrder?: Maybe<Order>;
  addProductToCategory?: Maybe<Store>;
  addProductToStore?: Maybe<Store>;
  createBrand?: Maybe<Brand>;
  createCart?: Maybe<Cart>;
  createCategory?: Maybe<Category>;
  createOrder?: Maybe<Order>;
  createProduct?: Maybe<Product>;
  createStore?: Maybe<Store>;
  deleteProduct?: Maybe<Product>;
  deleteStore?: Maybe<Store>;
  login?: Maybe<User>;
  register?: Maybe<User>;
  updateCategory?: Maybe<Category>;
  updateOrder?: Maybe<Order>;
  updateProduct?: Maybe<Product>;
  updateStore?: Maybe<Store>;
  updatebrand?: Maybe<Brand>;
};


export type MutationAddBrandToProductArgs = {
  input?: InputMaybe<BrandProductInput>;
};


export type MutationAddCategoryToProductArgs = {
  input?: InputMaybe<CategoryProductInput>;
};


export type MutationAddOrderToOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationAddProductToCategoryArgs = {
  input?: InputMaybe<ProductCategoryInput>;
};


export type MutationAddProductToStoreArgs = {
  input?: InputMaybe<ProductStoreInput>;
};


export type MutationCreateBrandArgs = {
  input?: InputMaybe<BrandInput>;
};


export type MutationCreateCartArgs = {
  input?: InputMaybe<CartInput>;
};


export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CategoryInput>;
};


export type MutationCreateOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationCreateProductArgs = {
  input?: InputMaybe<ProductInput>;
};


export type MutationCreateStoreArgs = {
  input?: InputMaybe<StoreInput>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<CategoryInput>;
};


export type MutationUpdateOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ProductInput>;
};


export type MutationUpdateStoreArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<StoreInput>;
};


export type MutationUpdatebrandArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<BrandInput>;
};

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type OrderInput = {
  productId?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type Product = {
  __typename?: 'Product';
  categoryIds?: Maybe<Array<Maybe<Category>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  storeId?: Maybe<Store>;
};

export type ProductCategoryInput = {
  categoryId?: InputMaybe<Scalars['ID']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ProductInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['ID']>;
};

export type ProductStoreInput = {
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  storeId?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  getAllBrands?: Maybe<Array<Maybe<Brand>>>;
  getAllCarts?: Maybe<Array<Maybe<Cart>>>;
  getAllCategories?: Maybe<Array<Maybe<Category>>>;
  getAllOrders?: Maybe<Array<Maybe<Order>>>;
  getAllProducts?: Maybe<Array<Maybe<Product>>>;
  getAllStores?: Maybe<Array<Maybe<Store>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getBrandById?: Maybe<Brand>;
  getCartById?: Maybe<Cart>;
  getCategoryById?: Maybe<Category>;
  getLastCartByUserId?: Maybe<Cart>;
  getLastOrderByUserId?: Maybe<Order>;
  getOrderById?: Maybe<Order>;
  getProductById?: Maybe<Product>;
  getStoreById?: Maybe<Store>;
  getUserById?: Maybe<User>;
  hello?: Maybe<Scalars['String']>;
};


export type QueryGetBrandByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetCartByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetCategoryByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetLastCartByUserIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetLastOrderByUserIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetOrderByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetStoreByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID'];
};

export enum Role {
  Seller = 'SELLER',
  User = 'USER'
}

export type Store = {
  __typename?: 'Store';
  address?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  productIds?: Maybe<Array<Maybe<Product>>>;
  userId?: Maybe<User>;
};

export type StoreInput = {
  address?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  token?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Brand: ResolverTypeWrapper<Brand>;
  BrandInput: BrandInput;
  BrandProductInput: BrandProductInput;
  Cart: ResolverTypeWrapper<Cart>;
  CartInput: CartInput;
  Category: ResolverTypeWrapper<Category>;
  CategoryInput: CategoryInput;
  CategoryProductInput: CategoryProductInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<Order>;
  OrderInput: OrderInput;
  Product: ResolverTypeWrapper<Product>;
  ProductCategoryInput: ProductCategoryInput;
  ProductInput: ProductInput;
  ProductStoreInput: ProductStoreInput;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  Store: ResolverTypeWrapper<Store>;
  StoreInput: StoreInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Brand: Brand;
  BrandInput: BrandInput;
  BrandProductInput: BrandProductInput;
  Cart: Cart;
  CartInput: CartInput;
  Category: Category;
  CategoryInput: CategoryInput;
  CategoryProductInput: CategoryProductInput;
  ID: Scalars['ID'];
  LoginInput: LoginInput;
  Mutation: {};
  Order: Order;
  OrderInput: OrderInput;
  Product: Product;
  ProductCategoryInput: ProductCategoryInput;
  ProductInput: ProductInput;
  ProductStoreInput: ProductStoreInput;
  Query: {};
  Store: Store;
  StoreInput: StoreInput;
  String: Scalars['String'];
  User: User;
  UserInput: UserInput;
};

export type BrandResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  orderIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBrandToProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<MutationAddBrandToProductArgs>>;
  addCategoryToProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<MutationAddCategoryToProductArgs>>;
  addOrderToOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, Partial<MutationAddOrderToOrderArgs>>;
  addProductToCategory?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, Partial<MutationAddProductToCategoryArgs>>;
  addProductToStore?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, Partial<MutationAddProductToStoreArgs>>;
  createBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, Partial<MutationCreateBrandArgs>>;
  createCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, Partial<MutationCreateCartArgs>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, Partial<MutationCreateCategoryArgs>>;
  createOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, Partial<MutationCreateOrderArgs>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<MutationCreateProductArgs>>;
  createStore?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, Partial<MutationCreateStoreArgs>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  deleteStore?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<MutationDeleteStoreArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationLoginArgs>>;
  register?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationRegisterArgs>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'id'>>;
  updateOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, Partial<MutationUpdateOrderArgs>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id'>>;
  updateStore?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<MutationUpdateStoreArgs, 'id'>>;
  updatebrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<MutationUpdatebrandArgs, 'id'>>;
};

export type OrderResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  categoryIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeId?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllBrands?: Resolver<Maybe<Array<Maybe<ResolversTypes['Brand']>>>, ParentType, ContextType>;
  getAllCarts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cart']>>>, ParentType, ContextType>;
  getAllCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  getAllOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  getAllProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  getAllStores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType>;
  getAllUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  getBrandById?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<QueryGetBrandByIdArgs, 'id'>>;
  getCartById?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, Partial<QueryGetCartByIdArgs>>;
  getCategoryById?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryGetCategoryByIdArgs, 'id'>>;
  getLastCartByUserId?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryGetLastCartByUserIdArgs, 'id'>>;
  getLastOrderByUserId?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryGetLastOrderByUserIdArgs, 'id'>>;
  getOrderById?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryGetOrderByIdArgs, 'id'>>;
  getProductById?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryGetProductByIdArgs, 'id'>>;
  getStoreById?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<QueryGetStoreByIdArgs, 'id'>>;
  getUserById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type StoreResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Brand?: BrandResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Store?: StoreResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

