// import qs from 'query-string';
import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/product.constants";

// const url = "/product";

// export const getList = (params = {}) => {
//   let queryParams = '';
//   if (Object.keys(params).length > 0) {
//     queryParams = `?${qs.stringify(params)}`;
//   }
//   return axiosService.get(`${API_ENDPOINT}${url}${queryParams}`);
// };

export const loginAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/customer/login`, data);
};

export const registerAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/customer/register`, data);
};
