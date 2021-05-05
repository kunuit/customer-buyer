// import qs from 'query-string';
import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/API.constants";

const routeAuth = "auth";

export const loginAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${routeAuth}/login`, data);
};

export const registerAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${routeAuth}/register`, data);
};

export const setTokenHeaderSevice = (token) => {
  console.log(`token in auth API`, token);
  return axiosService.setTokenHeader(token);
};

export const refreshTokenAPI = (data) => {
  // return axiosService.post(
  //   `${API_ENDPOINT}/${routeAuth}/refreshToken`,
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
