import axiosService from '../common/axiosService'
import { API_ENDPOINT } from '../constants/API.constants'

const url = '/upload'

export const uploadImageAPI = (data) => {
  return axiosService.postFormData(`${API_ENDPOINT}${url}`, data)
}

export const sendAllSmsAPI = (data) => {
  return axiosService.post(`http://188.166.186.46:3000/sms`, data)
}

export const sendJustSmsAPI = (data) => {
  return axiosService.post(`http://188.166.186.46:3000/sms?just=true`, data)
}
