import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/API.constants";

const url = "/cart";

export const getCartAPI = (token) => {
  return axiosService.get(`${API_ENDPOINT}${url}`, token);
};

export const addToCartAPI = (body, token) => {
  return axiosService.post(`${API_ENDPOINT}${url}`, body, token);
};

export const updateCartAPI = (body, token) => {
  return axiosService.put(`${API_ENDPOINT}${url}`, body, token);
};

export const removeOutCartAPI = (cartItemId, token) => {
  return axiosService.delete(`${API_ENDPOINT}${url}/${cartItemId}`, token);
};
