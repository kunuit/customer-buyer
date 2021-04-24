import { typeFavorites } from "../sagas/favorite.saga";
import { typeProducts } from "../sagas/product.saga";

const initialState = {
  data: [],
  isLoading: false,
  isCreatedOrDeletedCart: false,
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(`action`, { type });
  switch (type) {
    case typeFavorites.showLoadingFavorite:
      return {
        isLoading: true,
      };
    case typeFavorites.fetchFavoriteFirebaseSuccess:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    case typeFavorites.activeFavoriteProductSuccess:
      console.log(payload.data);
      return {
        ...state,
        isLoading: false,
        data: [...state.data, payload.data],
      };
    case typeFavorites.inactiveFavoriteProductSuccess:
      return {
        ...state,
        data: state.data.filter((product) => {
          return product.id != payload.data;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
