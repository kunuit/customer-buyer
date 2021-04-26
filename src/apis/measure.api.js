import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/API.constants";

const url = "/measure";

export const getMeasureAPI = (token) => {
  return axiosService.get(`${API_ENDPOINT}${url}`, token);
};
