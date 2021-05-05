import { role, typeAuths } from "../sagas/auth.saga";

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
  isRegisterLoading: false,
  isAdmin: false,
  isAdminLogin: false,
  isRequireLogin: false,
};

const reducer = (state = initState, action) => {
  console.log(`state.isRequireLogin`, state.isRequireLogin);
  switch (action.type) {
    case typeAuths.registerSuccess:
      return {
        ...state,
        isRegister: true,
        isRegisterLoading: false,
      };
    case typeAuths.registerFail:
      return {
        ...state,
        errorRegister: action.payload.error,
        isRegisterLoading: false,
      };
    case typeAuths.resetRegister:
      return {
        ...state,
        isRegister: false,
        errorRegister: null,
      };
    case typeAuths.loginSuccess:
      console.log(
        `action.payload.data.userInfo == role.staff ? true : false,`,
        action.payload.data.userInfo.role == role.staff ? true : false
      );
      return {
        ...state,
        token: action.payload.data.token,
        refreshToken: action.payload.data.refreshToken,
        dataCustomer:
          action.payload.data.userInfo.role == role.user
            ? action.payload.data.userInfo
            : null,
        dataAdmin:
          action.payload.data.userInfo.role == role.staff
            ? action.payload.data.userInfo
            : null,
        isAdminLogin:
          action.payload.data.userInfo.role == role.staff ? true : false,
        // isAdmin: action.payload.data.userInfo.role == role.staff ? true : false,
        isLogin: true,
        isAuthLoading: false,
        isRequireLogin: false,
      };
    case typeAuths.loginFail:
      return {
        ...state,
        errorLogin: action.payload.error,
        isAuthLoading: false,
      };
    case typeAuths.logout:
      return {
        ...state,
        token: null,
        refreshToken: null,
        isLogin: false,
        isAdminLogin: false,
        errorLogin: null,
        dataCustomer: null,
        dataAdmin: null,
        isAdmin: false,
      };
    case typeAuths.showAuthLoading:
      return {
        ...state,
        isAuthLoading: true,
      };
    case typeAuths.showRegisterLoading:
      return {
        ...state,
        isRegisterLoading: true,
      };
    case typeAuths.refreshTokenSuccess:
      return {
        ...state,
        token: action.payload.data.accessToken,
      };
    case typeAuths.refreshTokenFail:
      return {
        ...state,
        errorLogin: action.payload.error,
      };
    case typeAuths.requireLogin:
      return {
        ...state,
        isRequireLogin: action.payload.statusRequireLogin,
      };
    default:
      return state;
  }
};

export default reducer;
