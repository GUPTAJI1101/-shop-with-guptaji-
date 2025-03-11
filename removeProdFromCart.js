import { getCartFromLS } from "./getCartFromLS"
import { updateCartValue } from "./updateCartValue"

export const removeProdFromCart = (id) => {
    let cartProduct = getCartFromLS()
    cartProduct = cartProduct.filter((curProd) => curProd.id !== id)

    localStorage.setItem("cartProductLS", JSON.stringify(cartProduct)) 

    let removeDiv = document.getElementById(`.cart-card[data-id="${id}"]`)
    if(removeDiv){
        removeDiv.remove()
      
    }
  
    updateCartValue(cartProduct)
   setTimeout(()=>{
    location.reload()
   },300)
}