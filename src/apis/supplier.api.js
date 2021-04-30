// import qs from 'query-string';
import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/API.constants";

const url = "/supplier";

export const getSuppliersAPI = (page, token) => {
  return axiosService.get(`${API_ENDPOINT}${url}?page=${page}`, token);
};
