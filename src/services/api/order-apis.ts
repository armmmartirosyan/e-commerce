import { api } from "./axios-config";
import { AddOrderDTO } from "types/product-types";

class OrderApis {
  public async addOrder(orderData: AddOrderDTO) {
    return await api.post(`orders`, orderData);
  }

  public async getOrders(userId: string) {
    return await api.get(`orders`, { params: { userId } });
  }
}

export const orderApis = new OrderApis();
