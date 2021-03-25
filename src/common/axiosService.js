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
    if (error.response) return Promise.reject(error.response);
    if (error.request) return Promise.reject(error.request);
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
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
