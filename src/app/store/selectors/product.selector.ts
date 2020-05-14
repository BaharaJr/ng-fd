import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "src/app/interfaces/product.interface";

const getProductFeatureSelector = createFeatureSelector<ProductState>("products");

export const getShowProductCode = createSelector(
  getProductFeatureSelector,
  (state) => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureSelector,
  (state) => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureSelector,
  (state) => state.products
);
