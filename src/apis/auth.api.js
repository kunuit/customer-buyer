// import qs from 'query-string';
import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/product.constants";

const route = "customer";

export const loginAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${route}/login`, data);
};

export const registerAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${route}/register`, data);
};

export const refreshTokenAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${route}/refreshToken`, data);
};
