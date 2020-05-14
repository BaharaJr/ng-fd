import { ProductState } from "src/app/interfaces/product.interface";

const initialstate: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
};

export function reducer(state = initialstate, action): ProductState {
  switch (action.type) {
    case "TOGGLE_PRODUCT_CODE":
      return {
        ...state,
        showProductCode: action.payload,
      };
    default:
      return state;
  }
}
