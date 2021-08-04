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
  addressId: number;
  total: number;
  star: number;
}

export interface Profile {
  fullname: string;
  noTelp: string;
  images: string | undefined;
  address: string;
}
