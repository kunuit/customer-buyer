import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/API.constants";

const url = "/behavior/favorite";

export const getFavoriteProducts = (token) => {
  return axiosService.get(`${API_ENDPOINT}${url}`, token);
};

export const activeProdctToFavorite = (body, token) => {
  return axiosService.post(`${API_ENDPOINT}${url}`, body, token);
};

export const inactiveProductToFavorite = (body, token) => {
  console.log(`{body, token}`, { body, token });
  return axiosService.delete(`${API_ENDPOINT}${url}`, token, body);
};
