import { User } from "types/user-types";
import { api } from "./axios-config";

class AuthApis {
  public async signIn(email: string, password: string) {
    return await api.get(`users`, {
      params: {
        email,
        password,
      },
    });
  }

  public async getCurrentUser(id: string) {
    return await api.get(`users`, {
      params: { id },
    });
  }

  public async updateUser({ id, ...body }: User) {
    return await api.put(`users/${id}`, body);
  }
}

export const authApis = new AuthApis();
