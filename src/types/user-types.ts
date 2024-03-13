export type User = {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  phone: string;
  role: number;
  password: string;
};

export type SignUpBody = Omit<User, "id">;

export type SignInParams = {
  email: string;
  password: string;
};

export type SignUpLocalState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  password: string;
  confirmPassword: string;
  role: number;
};

export type SignUpInitialState = {
  localFields: SignUpLocalState;
  signUpRequest: {
    isLoading: boolean;
    success: boolean;
    error: string;
  };
};
