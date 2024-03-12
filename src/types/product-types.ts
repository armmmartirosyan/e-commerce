export type Item = {
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
  items: Item[];
  userId: string;
};
