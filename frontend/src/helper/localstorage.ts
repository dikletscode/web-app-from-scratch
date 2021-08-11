let id = localStorage.getItem("_id") || "{}";

export const getUserId = (): string => {
  if (id == "") {
    return "";
  }
  return JSON.parse(id).id;
};

export const getStoreId = (): string => {
  if (id == "") {
    return "";
  }

  return JSON.parse(id).storeId;
};
