export type User = {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  phone: string;
};

export type SignInParams = {
  email: string;
  password: string;
};
