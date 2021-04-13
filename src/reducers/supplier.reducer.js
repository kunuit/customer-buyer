import { typeSuppliers } from "../sagas/supplier.saga";

const initialState = {
  data: [],
  isLoading: false,
  isCreatedOrUpdatedOrDeletedSupplier: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeSuppliers.showLoadingSupplier:
      return {
        ...state,
        isLoading: true,
      };
    case typeSuppliers.fetchSupplierFirebaseSuccess:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    case typeSuppliers.createSupplierFirebaseSuccess:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedSupplier: true,
        isLoading: false,
        data: [...state.data, payload.data],
      };
    case typeSuppliers.removeSupplierFirebaseSuccess:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedSupplier: true,
        isLoading: false,
        data: state.data.filter((supplier) => {
          return supplier.id != payload.data;
        }),
      };
    case typeSuppliers.updateSupplierFirebaseSuccess:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedSupplier: true,
        isLoading: false,
        data: state.data.map((supplier) => {
          if (supplier.id == payload.data.id) {
            return payload.data;
          }
          return supplier;
        }),
      };
    case typeSuppliers.resetCreateSupplier:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedSupplier: false,
      };

    default:
      return state;
  }
};

export default reducer;
