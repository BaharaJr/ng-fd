import { state } from 'src/app/interfaces/state.interface'
import { ProductState } from 'src/app/interfaces/product.interface'

export function reducer(state: ProductState, action): ProductState{
switch(action.type){
  case 'TOGGLE_PRODUCT_CODE':
  return {
    ...state,
    showProductCode: action.payload
  }
  default:
  return state
}
}
