import { AUTH_TOKEN_KEY } from "constants/shared-constants";

class AccountProvider {
  public getUserInfoFromToken = () => {
    let id = "";

    const token = this.getAuthToken();

    if (token) {
      const [_random, _id] = token.split("-");

      id = _id;
    }

    return { id };
  };

  public finalizeSignIn(id: string, remember: boolean): void {
    const token = this.generateUserToken(id);

    this.setAuthToken(token, remember);
    window.location.href = "/product-list";
  }

  public signOut() {
    this.removeAuthToken();
    window.location.href = "/";
  }

  public getAuthToken(key = AUTH_TOKEN_KEY): string {
    return localStorage.getItem(key) || sessionStorage.getItem(key) || "";
  }

  private generateUserToken(id: string): string {
    return Math.random() * 1000 + "-" + id + "-" + Math.random() * 1000;
  }

  private setAuthToken(
    token: string,
    remember: boolean,
    key = AUTH_TOKEN_KEY
  ): void {
    if (remember) {
      localStorage.setItem(key, token);
      return;
    }

    sessionStorage.setItem(key, token);
  }

  private removeAuthToken(key = AUTH_TOKEN_KEY): void {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }
}

export const account = new AccountProvider();
