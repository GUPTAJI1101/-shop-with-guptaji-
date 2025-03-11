import { accaddToCart, addToCart, addToCartWo, bookaddToCart, gadaddToCart } from "./addToCart";
import { accQuantityToggle, bookQuantityToggle, gadQuantityToggle, menQuantityToggle, womenQuantityToggle } from "./menQuantityToggle";

// gadQuantityToggle, 

export const topProductsCards = (products) => {
    const productContainer = document.querySelector("#topContainer")
const productTemplate = document.querySelector("#top-D")

    if(!products || products.length === 0) {
        return false;
    }

    productContainer.innerHTML = "";

    products.forEach((curElem) => {
        const {id, name,category, brand, price ,stock, description, image,image1, image2,image3 }= curElem;

        const productClone = document.importNode(productTemplate.content, true)
        productClone.querySelector(".cards").dataset.id = id;
        productClone.querySelector(".product-name").textContent = name
        productClone.querySelector(".top-image").src = image 
        productClone.querySelector(".category-span").textContent = category

        productContainer.append(productClone)  
    });
} 

export const mensCards = (mensP) => { 
const mensContainer = document.querySelector("#menContainer")
const mensTemplate = document.querySelector("#men")

if(!mensP || mensP.length === 0) {
    return false
}

mensContainer.innerHTML = "";

mensP.forEach((curElem) => {
    const{id, name , category, brand, price, stock, description, image} = curElem;

    const mensClone = document.importNode(mensTemplate.content, true)

    const formattedPrice = parseFloat(price).toFixed(2)
    const formattedActualPrice = (price*5).toFixed(2)
    
    mensClone.querySelector("#menCardValue").setAttribute("id",`card${id}` )

mensClone.querySelector(".men-span").textContent = category
mensClone.querySelector(".men-img").src = image
mensClone.querySelector(".men-name").textContent = name
mensClone.querySelector(".men-des").textContent = description
mensClone.querySelector(".men-price").textContent =` ₹${formattedPrice}`
mensClone.querySelector(".menActual-price").textContent = `₹${formattedActualPrice}`
mensClone.querySelector(".men-stock").textContent = stock

mensClone.querySelector(".plusMinus").addEventListener("click", (event) => {
  menQuantityToggle(event,id, stock)
})

  mensClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
     addToCart(event,id,stock)
  })

     mensContainer.append(mensClone)
})

}

export const womenCards = (womenP) => {
    const womenContainer = document.querySelector(".trendwContainer")
    const womenTemplate = document.querySelector("#women")

    if(!womenP || womenP.length === 0) {
        return false
    }

    womenContainer.innerHTML = ""

    womenP.forEach((curElem) => {
        const {id, name, category, brand, price, stock, description, image} = curElem;

        const womenClone = document.importNode(womenTemplate.content, true)

        const formattedPrice = parseFloat(price).toFixed(2)
        const formattedActualPrice = (price*5).toFixed(2)
        
        womenClone.querySelector("#womenCardValue").setAttribute("id", `wo-card${id}` )
    
    womenClone.querySelector(".women-span").textContent = category
    womenClone.querySelector(".women-img").src = image
    womenClone.querySelector(".women-name").textContent = name
    womenClone.querySelector(".women-des").textContent = description
    womenClone.querySelector(".women-price").textContent =` ₹${formattedPrice}`
    womenClone.querySelector(".womenActual-price").textContent = `₹${formattedActualPrice}`
    womenClone.querySelector(".women-stock").textContent = stock
    
    womenClone.querySelector(".woplusMinus").addEventListener("click", (event) => {
      womenQuantityToggle(event,id, stock)
    })

    womenClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
        addToCartWo(event,id,stock)
     })
    
         womenContainer.append(womenClone)

    })

} 


export const gadgets = (gad) => {
    const gContainer = document.querySelector(".gadContainer")
    const gTemplate = document.querySelector("#gad")

    if(!gad || gad.length === 0) {
        return false
    }

    gContainer.innerHTML = ""

    gad.forEach((curElem) => {
        const {id, name, category, brand, price, stock, description, image} = curElem;

        const gClone = document.importNode(gTemplate.content, true)

        const formattedPrice = parseFloat(price).toFixed(2)
        const formattedActualPrice = (price*5).toFixed(2)
        
        gClone.querySelector("#gadCardValue").setAttribute("id", `gad-card${id}` )
    
    gClone.querySelector(".gad-span").textContent = category
    gClone.querySelector(".gad-img").src = image
    gClone.querySelector(".gad-name").textContent = name
    gClone.querySelector(".gad-des").textContent = description
    gClone.querySelector(".gad-price").textContent =` ₹${formattedPrice}`
    gClone.querySelector(".gadActual-price").textContent = `₹${formattedActualPrice}`
    gClone.querySelector(".gad-stock").textContent = stock
    
    gClone.querySelector(".gadplusMinus").addEventListener("click", (event) => {
      gadQuantityToggle(event,id, stock)
    })

    gClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
        gadaddToCart(event,id,stock)
     })
    
         gContainer.append(gClone)

    })

} 

export const accessories = (acc) => {
    const accContainer = document.querySelector(".accContainer")
    const accTemplate = document.querySelector("#acc")
    if(!acc || acc.length === 0){
        return false;
    }
    accContainer.innerHTML = ""

  
    acc.forEach((curElem) => {
        const {id, name, category, brand, price, stock, description, image} = curElem;

        const accClone = document.importNode(accTemplate.content, true)

        const formattedPrice = parseFloat(price).toFixed(2)
        const formattedActualPrice = (price*5).toFixed(2)
        
        accClone.querySelector("#accCardValue").setAttribute("id", `acc-card${id}` )
    
    accClone.querySelector(".acc-span").textContent = category
    accClone.querySelector(".acc-img").src = image
    accClone.querySelector(".acc-name").textContent = name
    accClone.querySelector(".acc-des").textContent = description
    accClone.querySelector(".acc-price").textContent =` ₹${formattedPrice}`
    accClone.querySelector(".accActual-price").textContent = `₹${formattedActualPrice}`
    accClone.querySelector(".acc-stock").textContent = stock
    accClone.querySelector(".accplusMinus").addEventListener("click", (event) => {
      accQuantityToggle(event,id, stock)
    })

    accClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
        accaddToCart(event,id,stock)
     })
    
         accContainer.append(accClone)

    })
}


export const books = (b) => {
    const bookContainer = document.querySelector(".bookContainer")
    const bookTemplate = document.querySelector("#book")
    if(!b || b.length === 0){
        return false;
    }
    bookContainer.innerHTML = ""

  
    b.forEach((curElem) => {
        const {id, name, category, brand, price, stock, description, image} = curElem;

        const bookClone = document.importNode(bookTemplate.content, true)

        const formattedPrice = parseFloat(price).toFixed(2)
        const formattedActualPrice = (price*5).toFixed(2)
        
        bookClone.querySelector("#bookCardValue").setAttribute("id", `book-card${id}` )
    
    bookClone.querySelector(".book-span").textContent = category
    bookClone.querySelector(".book-img").src = image
    bookClone.querySelector(".book-name").textContent = name
    bookClone.querySelector(".book-des").textContent = description
    bookClone.querySelector(".book-price").textContent =` ₹${formattedPrice}`
    bookClone.querySelector(".bookActual-price").textContent = `₹${formattedActualPrice}`
    bookClone.querySelector(".book-stock").textContent = stock
    bookClone.querySelector(".bookplusMinus").addEventListener("click", (event) => {
      bookQuantityToggle(event,id, stock)
    })
    bookClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
        bookaddToCart(event,id,stock)
     })
         bookContainer.append(bookClone)

    })
}