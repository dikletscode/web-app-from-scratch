interface StoreAddress {
  address: string;
  city: string;
  id: number;
  nameStore: string;
  province: string;
  sellerId: number;
}

interface Product {
  id: string;
  productName: string;
  price: string;
  images: string;
  star?: number;
  storeAddress: StoreAddress;
  storeId: number;
  total: number;
}

export interface CartUser {
  cartId: number;
  product: Product;
  productId: string;
}

export interface CartProduct {
  product: CartUser[];
}
