import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./auth/auth-slice";
import signUpReducer from "./sign-up/sign-up-slice";
import productsReducer from "./products/products-slice";
import cartReducer from "./cart/cart-slice";
import ordersReducer from "./orders/orders-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    signUp: signUpReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
