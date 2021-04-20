import { role, typeAuths } from "../sagas/auth.saga";

const initState = {
  dataCustomer: null,
  token: null,
  refreshToken: null,
  isLogin: true,
  isRegister: false,
  errorRefreshToken: null,
  errorLogin: null,
  errorRegister: null,
  isAuthLoading: false,
  isRegisterLoading: false,
  isAdmin: false,
  isAdminLogin: true,
};

const reducer = (state = initState, action) => {
  console.log(`action`, action);
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
      return {
        ...state,
        token: action.payload.data.token,
        refreshToken: action.payload.data.refreshToken,
        dataCustomer:
          action.payload.data.userInfo == role.user
            ? null
            : action.payload.data.userInfo,
        dataAdmin:
          action.payload.data.userInfo == role.staff
            ? action.payload.data.userInfo
            : null,
        isAdminLogin: action.payload.data.userInfo == role.staff ? true : false,
        isLogin: true,
        isAuthLoading: false,
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
    case typeAuths.switchIsAdmin:
      return {
        ...state,
        isAdmin: !state.isAdmin,
      };
    // case LOGIN_FIREBASE_SUCCESS:
    //   return {
    //     ...state,
    //     dataCustomer: state.isAdmin ? null : action.payload.data,
    //     dataAdmin: state.isAdmin ? action.payload.data : null,
    //     isAdminLogin: state.isAdmin ? true : false,
    //     isLogin: true,
    //     isAuthLoading: false,
    //   };
    // case LOGIN_FIREBASE_FAIL:
    //   return {
    //     ...state,
    //     errorLogin: action.payload.error,
    //     isAuthLoading: false,
    //   };
    case typeAuths.isAuthLocal:
      return {
        ...state,
        token: action.payload.data.token,
        refreshToken: action.payload.data.refreshToken,
        dataCustomer: action.payload.data,
        dataCustomer:
          action.payload.data.userInfo == role.user
            ? null
            : action.payload.data.userInfo,
        dataAdmin:
          action.payload.data.userInfo == role.staff
            ? action.payload.data.userInfo
            : null,
        isAdminLogin: action.payload.data.userInfo == role.staff ? true : false,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default reducer;
