export type User = {
  username: string;
  email: string;
  password: string;
};
export type UserLogin = {
  usernameOrEmail: string;
  password: string;
};

export interface TermSeller {
  nameStore: string;
  noKtp: string;
  province: string;
  city: string;
  address: string;
}

export interface Product {
  productName: string;
  price: number;
  images: string;
  total: number;
  star?: number;
}

export interface Store {
  id: number;
  nameStore: string;
  province: string;
  city: string;
  address: string;
  etalase: Product;
}
export interface Cart {
  cart: {
    id: number;
    userId: string;
    product: [];
  };
}

export interface Profile {
  fullname: string;
  noTelp: string;
  images: string | undefined;
  address: string;
}
