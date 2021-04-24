import { firebase } from "../../common/config/firebase";

const rootRef = firebase.database().ref();
const supplier = rootRef.child("suppliers");
const newsupplier = firebase.database().ref("/suppliers").push();

export const getAllSupplier_FiB_API = async () => {
  try {
    const data = await supplier.once("value");
    const snapshot = data.val();
    return { code: 200, data: snapshot };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const createSupplier_FiB_API = async (data) => {
  try {
    console.log(data, "check data in API");
    const newSupplier = await firebase
      .database()
      .ref(`/suppliers/${data.id}`)
      .set({ ...data });
    console.log(newSupplier, "test create at Saga");
    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const updateSupplier_FiB_API = async (data) => {
  try {
    const updatedSupplier = await firebase
      .database()
      .ref(`/suppliers/${data.id}`)
      .update({
        ...data,
      });

    console.log(updatedSupplier, "test update at Saga");
    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const removeSupplier_FiB_API = async (index) => {
  try {
    const removeSupplier = await firebase
      .database()
      .ref(`/suppliers/${index}`)
      .remove();

    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};

export const querySupplier_FiB_API = async (data) => {
  try {
    const query = await firebase
      .database()
      .ref("/suppliers")
      .equalTo(data)
      .once("value");
    console.log(query);

    return { code: 200, data: "res" };
  } catch (error) {
    return { code: 400, data: error + "" };
  }
};
