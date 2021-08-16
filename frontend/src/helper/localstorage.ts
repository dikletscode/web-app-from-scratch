let id = localStorage.getItem("_id") || "{}";

interface ID {
  userId: string;
  storeId: string;
  cartId: string;
}

const get: ID = {
  userId: JSON.parse(id).id || "",
  storeId: JSON.parse(id).storeId || "",
  cartId: JSON.parse(id).cartId || "",
};
export default get;
