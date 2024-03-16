export type UpdateUserDTO = {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  phone: string;
};

export type User = UpdateUserDTO & { role: number; password: string };

export type UserOmitId = Omit<User, "id">;

export type SignUpLocalUser = UserOmitId & { confirmPassword: string };
