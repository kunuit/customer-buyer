import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/API.constants";

const url = "/cart";

export const getCartAPI = () => {
  return axiosService.get(`${API_ENDPOINT}${url}`);
};

export const addToCartAPI = (body) => {
  return axiosService.post(`${API_ENDPOINT}${url}`, body);
};

export const updateCartAPI = (body) => {
  return axiosService.put(`${API_ENDPOINT}${url}`, body);
};

export const removeOutCartAPI = (cartItemId) => {
  console.log(`cartItemId, `, cartItemId);
  return axiosService.delete(`${API_ENDPOINT}${url}/${cartItemId}`);
};
