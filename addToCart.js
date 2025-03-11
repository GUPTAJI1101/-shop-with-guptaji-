import { getCartFromLS } from "./getCartFromLS"
import { updateCartValue } from "./updateCartValue"
getCartFromLS()

export const addToCart = (event,id,stock) => {

    let arrLocalStorage = getCartFromLS()

    const curProdElem = document.querySelector(`#card${id}`)
    let quantity = curProdElem.querySelector(".mensQuantity").innerText
    let price = curProdElem.querySelector(".men-price").innerText
   
    price = price.replace("₹", "");
    let existingProd = arrLocalStorage.find((curProd) => curProd.id === id);

    if(existingProd && quantity > 1){
        quantity = Number(existingProd.quantity) + Number(quantity); 
       price = Number(price*quantity)
       let updateCart = {id, quantity, price}
     updateCart =  arrLocalStorage.map((curProd) => {
          return curProd.id === id ? updateCart : curProd
       })
       localStorage.setItem("cartProductLS", JSON.stringify(updateCart)) 
    }

     if(existingProd) {
        return false
     }


    price = Number(price * quantity);
    quantity = Number(quantity);


    arrLocalStorage.push({id, quantity, price})
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorage)) 


    updateCartValue(arrLocalStorage)

}

export const addToCartWo = (event,id,stock) => {
 const wocurProdElem = document.querySelector(`#wo-card${id}`)
 let woarrLocalStorage = getCartFromLS()
 let quantity = wocurProdElem.querySelector(".womensQuantity").innerText
 let price = wocurProdElem.querySelector(".women-price").innerText

price = price.replace("₹", "");

let existingProdwo = woarrLocalStorage.find((curProd)=> curProd.id === id)

if (existingProdwo && quantity > 1){
   quantity = Number(existingProdwo.quantity) + Number(quantity)
   price = Number(price * quantity);
  let updateCart = {id,price,quantity}
 updateCart =  woarrLocalStorage.map((curProd)=>{
     return curProd.id === id ? updateCart : curProd
  })
 localStorage.setItem("cartProductLS",JSON.stringify(updateCart))

}

if(existingProdwo){
   return false 
}

 price = Number(price * quantity);
 quantity = Number(quantity)
 
 woarrLocalStorage.push( {id,price,quantity})
 localStorage.setItem("cartProductLS",JSON.stringify(woarrLocalStorage))

 updateCartValue(woarrLocalStorage)
   
}

export const gadaddToCart =  (event, id, stock) => {
   const gadcurProdElem = document.querySelector(`#gad-card${id}`)
   let gadarrLocalStorage = getCartFromLS()
   let quantity = gadcurProdElem.querySelector(".gadQuantity").innerText
   let price = gadcurProdElem.querySelector(".gad-price").innerText
  
  price = price.replace("₹", "");
  
  let existingProdgad = gadarrLocalStorage.find((curProd)=> curProd.id === id)
  
  if (existingProdgad && quantity > 1){
     quantity = Number(existingProdgad.quantity) + Number(quantity)
     price = Number(price * quantity);
    let updateCart = {id,price,quantity}
   updateCart =  gadarrLocalStorage.map((curProd)=>{
       return curProd.id === id ? updateCart : curProd
    })
   localStorage.setItem("cartProductLS",JSON.stringify(updateCart))
  
  }
  
  if(existingProdgad){
     return false 
  }
  
   price = Number(price * quantity);
   quantity = Number(quantity)
   
   gadarrLocalStorage.push( {id,price,quantity})
   localStorage.setItem("cartProductLS",JSON.stringify(gadarrLocalStorage))
  
   updateCartValue(gadarrLocalStorage)
}


export const accaddToCart =  (event, id, stock) => {
   const acccurProdElem = document.querySelector(`#acc-card${id}`)
   let accarrLocalStorage = getCartFromLS()
   let quantity = acccurProdElem.querySelector(".accQuantity").innerText
   let price = acccurProdElem.querySelector(".acc-price").innerText
  
  price = price.replace("₹", "");
  
  let existingProdacc = accarrLocalStorage.find((curProd)=> curProd.id === id)
  
  if (existingProdacc && quantity > 1){
     quantity = Number(existingProdacc.quantity) + Number(quantity)
     price = Number(price * quantity);
    let updateCart = {id,price,quantity}
   updateCart =  accarrLocalStorage.map((curProd)=>{
       return curProd.id === id ? updateCart : curProd
    })
   localStorage.setItem("cartProductLS",JSON.stringify(updateCart))
  
  }
  
  if(existingProdacc){
     return false 
  }
  
   price = Number(price * quantity);
   quantity = Number(quantity)
   
   accarrLocalStorage.push( {id,price,quantity})
   localStorage.setItem("cartProductLS",JSON.stringify(accarrLocalStorage))
  
   updateCartValue(accarrLocalStorage)
}


export const bookaddToCart =  (event, id, stock) => {
   const bookcurProdElem = document.querySelector(`#book-card${id}`)
   let bookarrLocalStorage = getCartFromLS()
   let quantity = bookcurProdElem.querySelector(".bookQuantity").innerText
   let price = bookcurProdElem.querySelector(".book-price").innerText
  
  price = price.replace("₹", "");
  
  let existingProdbook = bookarrLocalStorage.find((curProd)=> curProd.id === id)
  
  if (existingProdbook && quantity > 1){
     quantity = Number(existingProdbook.quantity) + Number(quantity)
     price = Number(price * quantity);
    let updateCart = {id,price,quantity}
   updateCart =  bookarrLocalStorage.map((curProd)=>{
       return curProd.id === id ? updateCart : curProd
    })
   localStorage.setItem("cartProductLS",JSON.stringify(updateCart))
  
  }
  
  if(existingProdbook){
     return false 
  }
  
   price = Number(price * quantity);
   quantity = Number(quantity)
   
   bookarrLocalStorage.push( {id,price,quantity})
   localStorage.setItem("cartProductLS",JSON.stringify(bookarrLocalStorage))
  
   updateCartValue(bookarrLocalStorage)
}

