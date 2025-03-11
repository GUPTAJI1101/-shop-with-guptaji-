

export const menQuantityToggle = (event, id, stock) => {

    const currentCardElement = document.querySelector(`#card${id}`)
    
    const productQuantity = currentCardElement.querySelector(".mensQuantity")
    
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1
    
    if(event.target.className === "cartIncrement"){
      if(quantity < stock) {
        quantity += 1
      }else if(quantity === stock){
        quantity = stock
      }
}

    if(event.target.className === "cartDecrement"){
        if(quantity > 1){
             quantity -= 1; 
        }
    }
  productQuantity.innerText = quantity
  productQuantity.setAttribute("data-quantity", quantity)
  return quantity

}

export const womenQuantityToggle = (event, id, stock) => {

  const currentCardElement = document.querySelector(`#wo-card${id}`)
  
  const productQuantity = currentCardElement.querySelector(".womensQuantity")
  
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1
  
  if(event.target.className === "wocartIncrement"){
    if(quantity < stock) {
      quantity += 1
    }else if(quantity === stock){
      quantity = stock
    }
}

  if(event.target.className === "wocartDecrement"){
      if(quantity > 1){
           quantity -= 1; 
      }
  }
productQuantity.innerText = quantity
productQuantity.setAttribute("data-quantity", quantity)
return quantity
 
}


export const gadQuantityToggle = (event, id, stock) => {

  const currentCardElement = document.querySelector(`#gad-card${id}`)
  
  const productQuantity = currentCardElement.querySelector(".gadQuantity")
  
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1
  
  if(event.target.className === "gadcartIncrement"){
    if(quantity < stock) {
      quantity += 1
    }else if(quantity === stock){
      quantity = stock
    }
}

  if(event.target.className === "gadcartDecrement"){
      if(quantity > 1){
           quantity -= 1; 
      }
  }
productQuantity.innerText = quantity
productQuantity.setAttribute("data-quantity", quantity)
return quantity

}

export const accQuantityToggle = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#acc-card${id}`)
  const productQuantity =currentCardElement.querySelector(".accQuantity")
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1
    
  if(event.target.className === "acccartIncrement"){
    if(quantity < stock) {
      quantity += 1
    }else if(quantity === stock){
      quantity = stock
    }
}

  if(event.target.className === "acccartDecrement"){
      if(quantity > 1){
           quantity -= 1; 
      }
  }
productQuantity.innerText = quantity
productQuantity.setAttribute("data-quantity", quantity)
return quantity
}


export const bookQuantityToggle = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#book-card${id}`)
  const productQuantity =currentCardElement.querySelector(".bookQuantity")
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1
    
  if(event.target.className === "bookcartIncrement"){
    if(quantity < stock) {
      quantity += 1
    }else if(quantity === stock){
      quantity = stock
    }
}

  if(event.target.className === "bookcartDecrement"){
      if(quantity > 1){
           quantity -= 1; 
      }
  }
productQuantity.innerText = quantity
productQuantity.setAttribute("data-quantity", quantity)
return quantity
}