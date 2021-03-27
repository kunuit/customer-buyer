// import qs from 'query-string';
import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/product.constants";

const routeCustomer = "customer";
const routeAdmin = "admin";

export const loginAPI = (data) => {
  return {
    data: {
      data: {
        token: "customer token",
        refreshToken: "customer refreshToken",
      },
      statusCode: 200,
    },
  };
  // return axiosService.post(`${API_ENDPOINT}/${routeCustomer}/login`, data);
};

export const registerAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${routeCustomer}/register`, data);
};

export const refreshTokenAPI = (data) => {
  // return axiosService.post(
  //   `${API_ENDPOINT}/${routeCustomer}/refreshToken`,
  //   data,
  // );
};

export const loginAdminAPI = (data) => {
  return {
    data: {
      data: {
        token: "admin token",
        refreshToken: "admin refreshToken",
      },
      statusCode: 200,
    },
  };
  // return axiosService.post(`${API_ENDPOINT}/${routeAdmin}/login`, data);
};
