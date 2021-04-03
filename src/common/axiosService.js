import axios from "axios";

class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    console.log(error, "check in axiosService");
    if (error.response) return Promise.reject(error.response);
    if (error.request) return Promise.reject(error.request);
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  getWithToken(url, token) {
    console.log(url, token, "check api");
    return this.instance.get(url, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
  }

  post(url, body) {
    return this.instance.post(url, body, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  postWithToken(url, body, token) {
    return this.instance.post(url, body, {
      headers: {
        authorization: "Bearer " + token, //the token is a variable which holds the token
      },
    });
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

export default new AxiosService();

// khi import su dung class AxiosService
// thi no se chay toan tu //!new!
// khi goi toan tu new thi dong thoi no chay constructor()
// de no tao ra 1 cai instance gan vao this.instance
// success => res
// fail => Promise.reject()
