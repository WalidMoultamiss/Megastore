import { Maybe, Scalars } from "@generated/types";

export enum Role {
    USER = 'USER',
    SELLER = 'SELLER',
  }

  export enum StoreStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
  }

  
  
  
  export enum Status {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DELETED = 'DELETED',
    PENDING = 'PENDING',
  }

  export type IStatus = {
    __typename?: 'Status';
    ACTIVE?: Maybe<Scalars['String']>;
    INACTIVE?: Maybe<Scalars['String']>;
    DELETED?: Maybe<Scalars['String']>;
    PENDING?: Maybe<Scalars['String']>;
  };