export type Product = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  count: number;
  price: number;
};

export type Order = {
  id: string;
  date: string;
  userId: string;
  items: Product[];
};

export type AddProductDTO = Omit<Product, "id">;

export type ProductFilterFunction = (product: Product) => boolean;

export type AddOrderDTO = Omit<Order, "id">;

export type CartItem = {
  id: string;
  productId: string;
  productTitle: string;
  productPrice: number;
  quantity: number;
  userId: string;
};

export type AddUpdateCartItemDTO = Omit<CartItem, "id">;
