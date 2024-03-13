import { SignUpBody } from "types/user-types";
import { api } from "./axios-config";

class SignUpApis {
  public async signUp(userData: SignUpBody) {
    return await api.post(`users`, userData);
  }
}

export const signUpApis = new SignUpApis();
