import { typeUpload } from "../sagas/upload.saga";

const initialState = {
  urlProducts: [],
  isLoadingUpload: false,
};
// export const name = "uploads";

const reducer = (state = initialState, { type, payload }) => {
  console.log(`action`, { type });
  switch (type) {
    case typeUpload.showLoadingUpload:
      return {
        ...state,
        isLoadingUpload: true,
      };
    case typeUpload.uploadImageProductSuccess:
      console.log(state.urlProducts, "check");
      return {
        ...state,
        urlProducts: [...state.urlProducts, payload.data],
        isLoadingUpload: false,
      };
    case typeUpload.resetUrlProducts:
      return {
        ...state,
        urlProducts: [],
      };
    default:
      return state;
  }
};

export default reducer;
