let id = localStorage.getItem("_id") || "{}";

export const getUserId = (): string => {
  let userId = JSON.parse(id).id;
  if (!userId) {
    return "";
  }
  return userId;
};

export const getStoreId = (): string => {
  let storeId = JSON.parse(id).storeId;
  if (!storeId) {
    return "";
  }

  return storeId;
};
export const getCartId = (): string => {
  let cartId = JSON.parse(id).cartId;
  if (!cartId) {
    return "";
  }

  return cartId;
};
