import { Product } from "../products/product";

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}
