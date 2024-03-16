import { AddProductDTO } from "types/product-types";
import { api } from "./axios-config";

class ProductApis {
  public async getProducts() {
    return await api.get(`products`);
  }

  public async getProductById(id: string) {
    return await api.get(`products`, { params: { id } });
  }

  public async addProduct(addProductBody: AddProductDTO) {
    return await api.post(`products`, addProductBody);
  }
}

export const productApis = new ProductApis();
