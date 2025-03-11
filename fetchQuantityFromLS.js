import { getCartFromLS } from "./getCartFromLS"

export const  fetchQuantityFromLS = (id, price) => {
     let cartProducts = getCartFromLS()
     
     let existingProd = cartProducts.find((curProd) => curProd.id === id )
     let quantity  =1;
     if(existingProd){
           quantity  = existingProd.quantity
           price = existingProd.price
     }
     return{quantity,price}
}