export function reducer(state, action){
  switch(action.type){
    case 'MASK_USER_NAME':
    console.log('Existing State::', JSON.stringify(state))
    console.log('Payload::', action.payload)
    return {
      ...state,
      showProductCode: action.payload
    }
    default:
    return state
  }
  }
