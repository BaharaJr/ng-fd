import { Action } from "@ngrx/store";
import { Product } from "src/app/products/product";

export const enum ProductActionTypes {
  ToggleProductCode = "[PRODUCT] Toggle Product Code",
  SetCurrentProduct = "[PRODUCT] Set Current Product",
  InitializeCurrentProduct = "[PRODUCT] Initialize Current Product",
  ClearCurrentProduct = "[PRODUCT] Clear Current Product",
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;
  constructor(public payload: boolean) {}
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;
  constructor(public payload: Product) {}
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export type ProductActions =
  | ToggleProductCode
  | InitializeCurrentProduct
  | ClearCurrentProduct
  | SetCurrentProduct;
