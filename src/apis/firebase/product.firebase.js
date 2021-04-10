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

export const createProduct_FiB_API = async (data = []) => {
  try {
    const newProduct = await productRef.set([...data]);
    console.log(newProduct, "test");
    return { code: 200, data: "res" };
    // productRef
    //   .set([
    //     {
    //       id: 0,
    //       name: "mushroom",
    //       price: 9.99,
    //       description: "quality from home",
    //       categoryId: 0,
    //       measureId: 0,
    //       status: 0,
    //       images: [
    //         "https://i.pinimg.com/originals/eb/d4/de/ebd4deb64c74e2f1246626d5a290274d.png",
    //         "https://i.pinimg.com/564x/d1/7a/77/d17a77389b34daabcfdd58d78fce5c5d.jpg",
    //       ],
    //     },
    //     {
    //       id: 1,
    //       name: "mushroom 1",
    //       price: 9.98,
    //       description: "quality from home 1",
    //       categoryId: 0,
    //       measureId: 0,
    //       status: 0,
    //       images: [
    //         "https://i.pinimg.com/236x/1c/55/f6/1c55f6d8ef3148b44ba54f1252bb6905.jpg",
    //         "https://i.pinimg.com/236x/e6/86/4f/e6864fe2903cc1b34978caefb4617a5b.jpg",
    //       ],
    //     },
    //   ])
    //   .then(() => console.log("Data set."));
  } catch (error) {
    return { code: 400, message: error + "" };
  }
};
