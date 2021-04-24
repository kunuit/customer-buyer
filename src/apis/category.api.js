import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/API.constants";

const url = "/category";

export const getCategoriesAPI = (token) => {
  return axiosService.get(`${API_ENDPOINT}${url}`);
};
