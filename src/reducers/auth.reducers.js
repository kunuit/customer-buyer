const initState = {
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
} from "../constants/auth.constants";

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.data,
        isRegister: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        errorRegister: action.payload.error,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.data,
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
      };
    default:
      return state;
  }
};

export default reducer;
