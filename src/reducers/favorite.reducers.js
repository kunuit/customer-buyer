import { typeFavorites } from "../sagas/favorite.saga";
import { typeProducts } from "../sagas/product.saga";

const initialState = {
  favoriteProducts: [],
  isLoadingFetchFavoriteProduct: false,
  isActiveOrInactiveFavorite: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeFavorites.showLoadingFavorite:
      return {
        isLoadingFetchFavoriteProduct: true,
      };
    case typeFavorites.fetchFavoriteSuccess:
      return {
        ...state,
        isLoadingFetchFavoriteProduct: false,
        favoriteProducts: payload.newFavoriteProducts,
      };

    default:
      return state;
  }
};

export default reducer;
