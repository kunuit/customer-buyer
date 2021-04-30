import { typeSuppliers } from "../sagas/supplier.saga";

const initialState = {
  isLoading: false,
  isCreatedOrUpdatedOrDeletedSupplier: false,
  isLoadingFetchAddSupplier: false,
  data: [],
  supplierPagination: { currentPage: 1, totalPage: 1 },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeSuppliers.showLoadingSupplier:
      return {
        ...state,
        isLoading: true,
      };
    case typeSuppliers.fetchSupplierSuccess:
      return {
        ...state,
        data: payload.data,
        supplierPagination: payload.pagination,
        isLoading: false,
        isLoadingFetchAddSupplier: false,
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
