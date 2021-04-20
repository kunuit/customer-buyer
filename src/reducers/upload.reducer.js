import { typeUpload } from "../sagas/upload.saga";

const initialState = {
  urlProducts: [],
  isLoading: false,
  isCreatedOrUpdatedOrDeletedSupplier: false,
};
// export const name = "uploads";

const reducer = (state = initialState, { type, payload }) => {
  console.log(`action`, { type });
  switch (type) {
    case typeUpload.uploadImageProductSuccess:
      console.log(state.urlProducts, "check");
      return {
        ...state,
        urlProducts: [...state.urlProducts, payload.data],
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
