const initState = {
  dataCustomer: null,
  token: null,
  isLogin: false,
  isRegister: false,
  errorLogin: null,
  errorRegister: null,
};

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET_REGISTER,
} from "../constants/auth.constants";

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      console.log(action);
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
    default:
      return state;
  }
};

export default reducer;
