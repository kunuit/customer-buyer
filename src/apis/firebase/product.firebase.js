import { firebase } from "../../common/config/firebase";

const rootRef = firebase.database().ref();
const productRef = rootRef.child("products");
const newProductRef = firebase.database().ref("/products").push();

export const getAllProduct_FiB_API = async () => {
  try {
    const data = await productRef.once("value");
    const snapshot = data.val();
    return { code: 200, data: snapshot };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const getProductById_Fib_API = async ({ id }) => {
  try {
    const data = await firebase.database().ref(`/products/${id}`).once("value");
    const snapshot = data.val();
    console.log(snapshot, "check get product by id in API");
    return snapshot;
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const createProduct_FiB_API = async (data) => {
  try {
    const newProduct = await firebase
      .database()
      .ref(`/products/${data.id}`)
      .set({ ...data });
    console.log(newProduct, "test create at Saga");
    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const updateProduct_FiB_API = async (data) => {
  try {
    const updatedProduct = await firebase
      .database()
      .ref(`/products/${data.id}`)
      .update({
        ...data,
      });

    console.log(updatedProduct, "test update at Saga");
    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const removeProduct_FiB_API = async (index) => {
  try {
    const removeProduct = await firebase
      .database()
      .ref(`/products/${index}`)
      .remove();

    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const queryProduct_FiB_API = async (data) => {
  try {
    const query = await firebase
      .database()
      .ref("/products")
      .equalTo(data)
      .once("value");
    console.log(query);

    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};
