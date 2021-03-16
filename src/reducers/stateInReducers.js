const initState = {
  token: null,
};

import * as actionTypes from '../constants/auth.constants';

export const reducer = (state = initState, action) => {
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
