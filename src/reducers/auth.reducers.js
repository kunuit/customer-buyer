const initState = {
  token: null,
};

import * as actionTypes from "../constants/auth.constants";

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
