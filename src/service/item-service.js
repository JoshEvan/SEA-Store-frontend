import { BACKEND_URL, GET_ALL_ITEM } from "../config/api";

export const serviceGetAllItems = async () => {
  console.log("fecthing");
  return fetch(BACKEND_URL + GET_ALL_ITEM);
};
