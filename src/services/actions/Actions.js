import {ADD_TO_CART,REMOVE_TO_CART} from '../Constants'
export const addToCart=(data)=>{
    console.log("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const removeToCart=(data)=>{
  console.warn("remove ations",data)
    return {
        type:REMOVE_TO_CART,
        data:data
    }
}