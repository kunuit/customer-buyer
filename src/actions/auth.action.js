import {
  LOGIN,
  LOGOUT,
  REGISTER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET_REGISTER,
  SHOW_AUTH_LOADING,
  HIDE_AUTH_LOADING,
} from "../constants/auth.constants";

// import { STATUSES } from "../constants";

export const loginACT = (data) => {
  return {
    type: LOGIN,
    payload: {
      data,
    },
  };
};

export const loginSuccessACT = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      data,
    },
  };
};

export const loginFailACT = (error) => {
  console.log(error, "action login fail");
  return {
    type: LOGIN_FAIL,
    payload: {
      error,
    },
  };
};

export const registerACT = (data) => {
  return {
    type: REGISTER,
    payload: {
      data,
    },
  };
};

export const registerSuccessACT = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const registerFailACT = (error) => {
  return {
    type: REGISTER_FAIL,
    payload: {
      error,
    },
  };
};

export const logoutACT = () => {
  return {
    type: LOGOUT,
  };
};

export const resetRegisterACT = () => {
  return {
    type: RESET_REGISTER,
  };
};

export const showAuthLoadingACT = () => {
  return {
    type: SHOW_AUTH_LOADING,
  };
};

export const hideAuthLoadingACT = () => {
  return {
    type: HIDE_AUTH_LOADING,
  };
};
