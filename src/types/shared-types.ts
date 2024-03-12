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
