import { AddUpdateCartItemDTO } from "types/product-types";
import { api } from "./axios-config";

class CartApis {
  public async getCart(userId: string) {
    return await api.get(`cart`, { params: { userId } });
  }

  public async getCartItem(productId: string, userId: string) {
    return await api.get(`cart`, { params: { productId, userId } });
  }

  public async removeCartItem(id: string) {
    return await api.delete(`cart/${id}`);
  }

  public async addToCart(body: AddUpdateCartItemDTO) {
    return await api.post(`cart`, body);
  }

  public async updateCartItem(id: string, body: AddUpdateCartItemDTO) {
    return await api.put(`cart/${id}`, body);
  }
}

export const cartApis = new CartApis();
