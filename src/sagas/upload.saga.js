import { takeLatest, call, put } from "@redux-saga/core/effects";
import { uploadImageAPI } from "../apis/upload.api";
import { showToast } from "../common/Layout/toast.helper";

export const typeUpload = {
  uploadImageProduct: "UPLOAD_IMAGE_PRODUCT",
  uploadImageProductSuccess: "UPLOAD_IMAGE_PRODUCT_SUCCESS",
  // reset
  resetUrlProducts: "RESET_URL_PRODUCT",
};

function* uploadImageProductSaga({ payload }) {
  // add uri to formData
  let formData = new FormData();
  let filename = payload.data.split("/").pop();
  // Infer the type of the image
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;
  // Assume "photo" is the name of the form field the server expects
  formData.append("image", { uri: payload.data, name: filename, type });
  // call API upload
  const uploadRes = yield call(uploadImageAPI, formData);
  const { uploaded, url } = uploadRes.data;
  if (uploaded) {
    yield put({
      type: typeUpload.uploadImageProductSuccess,
      payload: {
        data: url,
      },
    });
  } else {
    showToast({ title: "Upload", type: "error", message: "can't not upload" });
  }
}

export const uploadSagas = [
  takeLatest(typeUpload.uploadImageProduct, uploadImageProductSaga),
];
