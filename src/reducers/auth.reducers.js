import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FIREBASE_SUCCESS,
  LOGIN_FIREBASE_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET_REGISTER,
  SHOW_AUTH_LOADING,
  HIDE_AUTH_LOADING,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
  SWITCH_IS_ADMIN,
} from "../constants/auth.constants";
import { typeAuths } from "../sagas/auth.saga";

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
  isAdmin: false,
  isAdminLogin: false,
};

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
        dataCustomer: state.isAdmin ? null : action.payload.data,
        dataAdmin: state.isAdmin ? action.payload.data : null,
        isAdminLogin: state.isAdmin ? true : false,
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
        isAdminLogin: false,
        errorLogin: null,
        dataCustomer: null,
        dataAdmin: null,
        isAdmin: false,
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
        errorLogin: action.payload.error,
      };
    case SWITCH_IS_ADMIN:
      return {
        ...state,
        isAdmin: !state.isAdmin,
      };
    case LOGIN_FIREBASE_SUCCESS:
      return {
        ...state,
        dataCustomer: state.isAdmin ? null : action.payload.data,
        dataAdmin: state.isAdmin ? action.payload.data : null,
        isAdminLogin: state.isAdmin ? true : false,
        isLogin: true,
        isAuthLoading: false,
      };
    case LOGIN_FIREBASE_FAIL:
      return {
        ...state,
        errorLogin: action.payload.error,
        isAuthLoading: false,
      };
    case typeAuths.isAuthLocal:
      return {
        ...state,
        dataCustomer: action.payload.data,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default reducer;
