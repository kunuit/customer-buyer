import axios from "axios";

class AxiosService {
  constructor() {
    const instance = axios.create();
    this.handleError = this.handleError.bind(this);
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
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

  get(url, token) {
    if (token) {
      return this.instance.get(url, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
    } else return this.instance.get(url);
  }

  postFormData(url, body, token) {
    if (token) {
      return this.instance.post(url, body, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      });
    } else {
      return this.instance.post(url, body, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
  }

  post(url, body, token) {
    if (token) {
      return this.instance.post(url, body, {
        headers: {
          authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      });
    } else {
      return this.instance.post(url, body);
    }
  }

  put(url, body, token) {
    if (token) {
      return this.instance.put(url, body, {
        headers: {
          authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      });
    } else {
      return this.instance.put(url, body);
    }
  }

  delete(url, token) {
    if (token) {
      return this.instance.delete(url, {
        headers: {
          authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      });
    } else {
      return this.instance.delete(url);
    }
  }
}

export default new AxiosService();

// khi import su dung class AxiosService
// thi no se chay toan tu //!new!
// khi goi toan tu new thi dong thoi no chay constructor()
// de no tao ra 1 cai instance gan vao this.instance
// success => res
// fail => Promise.reject()
