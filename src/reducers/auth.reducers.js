const initState = {
  dataCustomer: null,
  token: null,
  refreshToken: null,
  isLogin: false,
  isRegister: false,
  errorRefreshToken: null,
  errorLogin: null,
  errorRegister: null,
  isAuthLoading: false,
};

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET_REGISTER,
  SHOW_AUTH_LOADING,
  HIDE_AUTH_LOADING,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
} from "../constants/auth.constants";

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        errorRegister: action.payload.error.message,
      };
    case RESET_REGISTER:
      return {
        ...state,
        isRegister: false,
        errorRegister: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
        refreshToken: action.payload.data.refreshToken,
        dataCustomer: action.payload.data,
        isLogin: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errorLogin: action.payload.error.message,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isLogin: false,
        errorLogin: null,
        dataCustomer: null,
      };
    case SHOW_AUTH_LOADING:
      return {
        ...state,
        isAuthLoading: true,
      };
    case HIDE_AUTH_LOADING:
      return {
        ...state,
        isAuthLoading: false,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload.data.accessToken,
      };
    case REFRESH_TOKEN_FAIL:
      return {
        ...state,
        errorRefreshToken: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
