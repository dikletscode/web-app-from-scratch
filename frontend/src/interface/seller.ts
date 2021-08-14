export interface SellerRegis {
  noKtp: string;
  nameStore: string;
  address: string;
  city: string;
  province: string;
}

export const sellerInit: SellerRegis = {
  noKtp: "",
  nameStore: "",
  address: "",
  city: "",
  province: "",
};

export interface Product {
  id: string;
  productName: string;
  price: string;
  total: string;
  images: string;
  star?: number;
}
export interface ProductSeller {
  productName: string;
  price: string;
  total: string;
  images: string;
  star?: number;
}

export interface StoreInfo {
  address: string;
  city: string;
  etalase: ProductSeller[];
  id: number;
  nameStore: string;
  province: string;
  sellerId: number;
}
