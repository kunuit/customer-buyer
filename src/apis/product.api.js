// import qs from 'query-string';
import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/API.constants";

const url = "/product";

// export const getList = (params = {}) => {
//   let queryParams = '';
//   if (Object.keys(params).length > 0) {
//     queryParams = `?${qs.stringify(params)}`;
//   }
//   return axiosService.get(`${API_ENDPOINT}${url}${queryParams}`);
// };

export const getProductsAPI = (page) => {
  return axiosService.get(`${API_ENDPOINT}${url}?page=${page}`);
};

export const getProductByIdAPI = (id) => {
  return axiosService.get(`${API_ENDPOINT}${url}/${id}`);
};

export const getProductByCategoryAPI = (id, page) => {
  return axiosService.get(
    `${API_ENDPOINT}${url}?categoryId=${id}&perPage=10&page=${page}`
  );
};
// /product/search?name=Test
export const queryProductAPI = (searchQuery) => {
  return axiosService.get(`${API_ENDPOINT}${url}/search?name=${searchQuery}`);
};

export const createProductAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}${url}/staff`, data);
};

export const removeProductAPI = (data) => {
  return axiosService.delete(`${API_ENDPOINT}${url}/staff/${data}`);
};

export const updateProductAPI = (id, data) => {
  console.log(`id, data,`, id, data);
  return axiosService.put(`${API_ENDPOINT}${url}/staff/${id}`, data);
};

// export const updateFavoriteProductAPI = (id, boolean, )
