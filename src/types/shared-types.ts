import { ChangeEvent, MouseEvent } from "react";
import { User } from "./user-types";

export type Listener = {
  id: string;
  cb: Function;
};

export type ListenerInfo = {
  [key: string]: Listener[];
};

export type UseSignInRequestProps = {
  email: string;
  password: string;
  disableSignIn: boolean;
  remember: boolean;
};

export type UseSignInStateReturn = {
  email: string;
  password: string;
  remember: boolean;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRememberChange: () => void;
  disableSignIn: boolean;
};

export type UseSignInRequestReturn = {
  isLoading: boolean;
  onSignIn: (e: MouseEvent<HTMLButtonElement>) => void;
};

export type AuthSlice = {
  signIn: {
    isLoading: boolean;
    data: null | User;
    error: string;
  };
};

export type Validator = (arg: any) => boolean;
