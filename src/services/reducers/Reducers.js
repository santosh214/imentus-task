import {ADD_TO_CART,REMOVE_TO_CART} from '../Constants'
const initialState={
    cartData:[]
}
export default function cartItems(state=[],action)
{
switch(action.type){
    case ADD_TO_CART:
    console.warn("reducers",action)    
    return [
            ...state,
          { cartData:action.data}
        ]
        case REMOVE_TO_CART:
          console.warn("reducers",action)
          let data=action.data.id
          state=state.filter(item=>item.cartData.id !==data)
          return [
                  ...state,
              ]
      
        default:
            return state
}
}