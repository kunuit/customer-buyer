import { firebase } from "../../common/config/firebase";

const rootRef = firebase.database().ref();
const cartRef = rootRef.child("carts");

export const getCart_FiB_API = async () => {
  try {
    const data = await cartRef.once("value");
    const snapshot = data.val();
    return { code: 200, data: snapshot };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const addToCart_FiB_API = async ({ id, quantity }) => {
  try {
    console.log(id, quantity);
    const cart = await firebase
      .database()
      .ref(`/carts/${id}`)
      .set({ id, quantity });
    console.log(cart, "test cart at Saga");
    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const updateCart_Fib_API = async ({ id, quantity }) => {
  try {
    const updatedCart = await firebase.database().ref(`/carts/${id}`).update({
      id,
      quantity,
    });

    console.log(updatedCart, "test update at Saga");
    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const removeOutCart_Fib_API = async (id) => {
  try {
    const removeProductOutCart = await firebase
      .database()
      .ref(`/carts/${id}`)
      .remove();

    console.log(removeProductOutCart, "test remove at Saga");
    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

// export const queryProduct_FiB_API = async (data) => {
//   try {
//     const query = await firebase
//       .database()
//       .ref("/products")
//       .equalTo(data)
//       .once("value");
//     console.log(query);

//     return { code: 200, data: "res" };
//   } catch (error) {
//     return { code: 400, data: error + "" };
//   }
// };
