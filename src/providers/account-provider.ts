import { AUTH_TOKEN_KEY } from "constants/index";

class AccountProvider {
  public getUser = () => {
    let email = "";
    const token = this.getAuthToken();

    if (token) {
      email = token.split("-")[1];
    }

    return { email };
  };

  public finalizeSignIn(email: string, remember: boolean): void {
    const token = this.generateUserToken(email);

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

  private generateUserToken(email: string): string {
    return Math.random() * 1000 + "-" + email + Math.random() * 1000 + "-";
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
