import { ProductState } from "src/app/interfaces/product.interface";
import { ProductActions, ProductActionTypes } from "../actions/product.action";

const initialstate: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
};

export function reducer(
  state = initialstate,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload,
      };
    case ProductActionTypes.SetCurrentProduct:
      return {
        ...state,
        currentProduct: { ...action.payload },
      };

    case ProductActionTypes.ClearCurrentProduct:
      return { ...state, currentProduct: null };

    case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProduct: {
          id: 0,
          productCode: "New",
          productName: "",
          description: "",
          starRating: 0,
        },
      };
    default:
      return state;
  }
}
