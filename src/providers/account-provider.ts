import { AUTH_TOKEN_KEY } from "constants/shared-constants";

class AccountProvider {
  public getUserInfoFromToken = () => {
    let id = "";
    let role = 0;

    const token = this.getAuthToken();

    if (token) {
      const [random1, _id, random2, _role] = token.split("-");
      id = _id;
      role = +_role;
    }

    return { id, role };
  };

  public finalizeSignIn(id: string, role: number, remember: boolean): void {
    const token = this.generateAuthToken(id, role);

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

  private generateAuthToken(id: string, role: number): string {
    return (
      Math.random() * 1000 +
      "-" +
      id +
      "-" +
      Math.random() * 1000 +
      "-" +
      role +
      "-" +
      Math.random() * 1000
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
