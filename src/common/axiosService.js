import axios from "axios";
import { useSelector } from "react-redux";
import { getLocal } from "./storeLocal/Auth.local";
class AxiosService {
  constructor() {
    const instance = axios.create();
    this.handleError = this.handleError.bind(this);
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
    // // using Interceptors
    // instance.interceptors.request.use(async (config) => {
    //   console.log(`await getLocal("token")`, await getLocal("token"));
    //   config.headers = {
    //     authorization: "Bearer " + (await getLocal("token")),
    //   };
    //   return config;
    // });
  }

  //TODO come home to check that when logout and login
  setTokenHeader(token) {
    console.log(`token`, token);
    return this.instance.interceptors.request.use((config) => {
      if (token) {
        config.headers = {
          authorization: `Bearer ${token}`,
        };
        console.log(`config`, config);
      } else {
        config.headers = {};
      }
      return config;
    });
  }

  async handleSuccess(response) {
    return response.data;
  }

  async handleError(error) {
    console.log(error, "check in axiosService");

    if (error.response) {
      return new Promise((resolve, reject) => {
        resolve({ data: error.response });
      });
    }
    if (error.request) {
      return new Promise.reject(error.request);
    }
  }

  get(url) {
    return this.instance.get(url);
  }

  postFormData(url, body, token) {
    return this.instance.post(url, body, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: "Bearer " + token, //the token is a variable which holds the token
      },
    });
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  delete(url, body) {
    console.log("run here");
    return this.instance.delete(url, {
      data: body,
    });
  }
}

export default new AxiosService();

export const Method = Object.freeze({
  get: "get",
  put: "put",
  post: "post",
  delete: "delete",
});

// khi import su dung class AxiosService
// thi no se chay toan tu //!new!
// khi goi toan tu new thi dong thoi no chay constructor()
// de no tao ra 1 cai instance gan vao this.instance
// success => res
// fail => Promise.reject()
