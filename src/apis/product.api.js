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

export const getProductsAPI = (token) => {
  console.log(token, "check token");
  return axiosService.getWithToken(`http://localhost:3000/product`, token);
};

export const addProductAPI = (data, token) => {
  return axiosService.postWithToken(`${API_ENDPOINT}${url}`, data, token);
};

export const addProductAPITest = (data, token) => {
  return axiosService.post(`https://ea87abaa5772.ngrok.io/product`, data);
};
