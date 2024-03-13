import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./auth/auth-slice";
import signUpReducer from "./sign-up/sign-up-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    signUp: signUpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
