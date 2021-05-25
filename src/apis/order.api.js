import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/API.constants";

const url = "/order";

export const getOrderAPI = () => {
  return axiosService.get(`${API_ENDPOINT}${url}`);
};

export const createOrderAPI = (body) => {
  return axiosService.post(`${API_ENDPOINT}${url}`, body);
};
