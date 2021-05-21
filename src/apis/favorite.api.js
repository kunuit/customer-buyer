import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/API.constants";

const url = "/behavior/favorite";

export const getFavoriteProducts = () => {
  return axiosService.get(`${API_ENDPOINT}${url}`);
};

export const activeProdctToFavorite = (body) => {
  return axiosService.post(`${API_ENDPOINT}${url}`, body);
};

export const inactiveProductToFavorite = (body) => {
  console.log(`{body, token}`, { body });
  return axiosService.delete(`${API_ENDPOINT}${url}`, body);
};
