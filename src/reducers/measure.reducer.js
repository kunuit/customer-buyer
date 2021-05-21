import { isLoaded } from "expo-font";
import { typeMeasures } from "../sagas/measure.saga";
// import { toastError, toastSuccess } from '../helpers/toast.Helper';

const initialState = {
  measures: [],
  isLoadingMeasure: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typeMeasures.showLoadingMeasure:
      return {
        ...state,
        isLoadingMeasure: true,
      };
    case typeMeasures.fetchMeasureSuccess:
      return {
        ...state,
        isLoadingMeasure: false,
        measures: action.payload.measures,
      };
    default:
      return state;
  }
};

export default reducer;
