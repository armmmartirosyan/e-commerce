import { AUTH_TOKEN_KEY } from "constants/shared-constants";

class AccountProvider {
  public getUser = () => {
    let email = "";
    let role: number | null = null;

    const token = this.getAuthToken();

    if (token) {
      const [_random, _email, _randomSecond, _role] = token.split("-");

      email = _email;
      role = +_role;
    }

    return { email, role };
  };

  public finalizeSignIn(email: string, remember: boolean, role: number): void {
    const token = this.generateUserToken(email, role);

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

  private generateUserToken(email: string, role: number): string {
    return (
      Math.random() * 1000 +
      "-" +
      email +
      "-" +
      Math.random() * 1000 +
      "-" +
      role
    );
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
