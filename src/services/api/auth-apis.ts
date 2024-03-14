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
}

export const authApis = new AuthApis();
