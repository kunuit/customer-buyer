import { firebase } from "../../common/config/firebase";

const rootRef = firebase.database().ref();
const FavoriteRef = rootRef.child("favorites");

export const getFavorite_FiB_API = async () => {
  try {
    const data = await FavoriteRef.once("value");
    const snapshot = data.val();
    return { code: 200, data: snapshot };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const addProductToFavorite_FiB_API = async ({ id }) => {
  try {
    const favorite = await firebase
      .database()
      .ref(`/favorites/${id}`)
      .set({ id });

    console.log(favorite, "test favorite at Saga");
    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const removeProductOutFavorite_FiB_API = async ({ id }) => {
  try {
    const Removedfavorite = await firebase
      .database()
      .ref(`/favorites/${id}`)
      .remove();

    console.log(Removedfavorite, "test remove at Saga");
    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};
