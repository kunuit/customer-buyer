import {
  LOGIN,
  LOGOUT,
  REGISTER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../constants/auth.constants";

// import { STATUSES } from "../constants";

export const login = (data) => {
  return {
    type: LOGIN,
    payload: {
      data,
    },
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      data,
    },
  };
};

export const loginFail = (error) => {
  console.log(error, "action login fail");
  return {
    type: LOGIN_FAIL,
    payload: {
      error,
    },
  };
};

export const register = (data) => {
  return {
    type: REGISTER,
    payload: {
      data,
    },
  };
};

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const registerFail = (error) => {
  return {
    type: REGISTER_FAIL,
    payload: {
      error,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
