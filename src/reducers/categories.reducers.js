import { isLoaded } from "expo-font";
import { typeCategories } from "../sagas/category.saga";
// import { toastError, toastSuccess } from '../helpers/toast.Helper';

const initialState = {
  data: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  console.log(`action`, action);
  switch (action.type) {
    case typeCategories.showLoadingCategory:
      return {
        ...state,
        isLoading: true,
      };
    case typeCategories.fetchCategoryFirebaseSuccess:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
