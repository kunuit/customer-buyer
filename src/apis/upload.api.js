import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/API.constants";

const url = "/upload";

export const uploadImageAPI = (data, token) => {
  return axiosService.postFormData(`${API_ENDPOINT}${url}`, data, token);
};
