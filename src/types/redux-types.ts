import {
  AddUpdateCartItemDTO,
  CartItem,
  Order,
  Product,
} from "./product-types";
import { SignUpLocalUser, User } from "./user-types";

type GenericForAuthInitial = {
  isLoading: boolean;
  data: null | User;
  error: string;
};

type GenericForProductInitial = {
  isLoading: boolean;
  data: null | Product;
  error: string;
};

type GenericActionWithSuccess = {
  isLoading: boolean;
  success: boolean;
  error: string;
};

export type AuthInitialState = {
  signIn: GenericForAuthInitial;
  currentUser: GenericForAuthInitial;
};

export type SignUpInitialState = {
  localFields: SignUpLocalUser;
  signUpRequest: GenericActionWithSuccess;
};

export type ProductSliceInitialState = {
  productList: GenericForProductInitial;
  productDetails: GenericForProductInitial;
  addProduct: GenericActionWithSuccess;
  search: string;
  minPrice: string;
  maxPrice: string;
};

export type OrdersInitialState = {
  getOrders: {
    isLoading: boolean;
    data: null | Order[];
    error: string;
  };
  addOrder: GenericActionWithSuccess;
};

export type CartInitialState = {
  cart: {
    removingLoadingId: string;
    isLoading: boolean;
    data: null | CartItem[];
    error: string;
  };
  addOrUpdate: GenericActionWithSuccess;
};

export type UpdateCartItemThunkPayload = {
  id: string;
  body: AddUpdateCartItemDTO;
};

export type SignInThunkPayload = {
  email: string;
  password: string;
};

export type GetCartItemPayload = { productId: string; userId: string };
