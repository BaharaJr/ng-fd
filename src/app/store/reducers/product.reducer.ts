import { ProductState } from "src/app/interfaces/product.interface";
import { ProductActions, ProductActionTypes } from '../actions/product.action';

const initialstate: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
};

export function reducer(state = initialstate, action: ProductActions): ProductState {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload,
      };
    default:
      return state;
  }
}
