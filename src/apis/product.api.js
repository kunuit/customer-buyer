// import qs from 'query-string';
import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/product.constants";

const url = "/product";

// export const getList = (params = {}) => {
//   let queryParams = '';
//   if (Object.keys(params).length > 0) {
//     queryParams = `?${qs.stringify(params)}`;
//   }
//   return axiosService.get(`${API_ENDPOINT}${url}${queryParams}`);
// };

export const getProductsAPI = () => {
  return axiosService.get(`http://localhost:3000/product`);
};

export const addProductAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}${url}`, data);
};
