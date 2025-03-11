import { getCartFromLS } from "./getCartFromLS";
import { updateCartValue } from "./updateCartValue";

document.addEventListener("DOMContentLoaded", ()=> {
    const productData = localStorage.getItem("selectedProduct")
    const product = JSON.parse(productData)  
    const template = document.querySelector("#top-template");
    const clone = document.importNode(template.content, true); 
     let price = product.price
    const formattedPrice = parseFloat(price).toFixed(2)
    const formattedActualPrice = (price*5).toFixed(2)

    document.querySelector(".main-section").appendChild(clone);
    document.querySelector(".modal-img").src = product.image;
    document.querySelector(".modal-img1").src = product.image1;
    document.querySelector(".modal-img2").src = product.image2;
    document.querySelector(".modal-img3").src = product.image3;
    document.querySelector(".modal-name").textContent = product.name;
   document.querySelector(".modal-price").textContent =` ₹${formattedPrice}`
document.querySelector(".modalActual-price").textContent = `₹${formattedActualPrice}`
    document.querySelector(".modal-des").textContent = product.description;
    document.querySelector(".modal-stock").textContent = product.stock;
    const id = product.id; 
const stock = product.stock;
    document.querySelector(".plusMinus").addEventListener("click", (event) => {
      topQuantityToggle(event,id, stock)
    })
    
      document.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
         addToCart(event,id,stock)
      })
})



    document.addEventListener("DOMContentLoaded", () => {
        const topContainer = document.querySelector("#imgContainer");
        const leftScroll = document.querySelector(".left-scroll-bttn");
        const rightScroll = document.querySelector(".right-scroll-bttn");
        const scrollAmt = 350;
  
        leftScroll.addEventListener("click", () => {
            topContainer.scrollBy({ left: -scrollAmt, behavior: "smooth" });
          console.log("cs");
          
        });
  
        rightScroll.addEventListener("click", () => {
            topContainer.scrollBy({ left: scrollAmt, behavior: "smooth" });
        });
 
   
    });
    export const topQuantityToggle = (event, id, stock) => {

        const currentCardElement = event.target.closest(".top-cards");
        if (!currentCardElement) {
            console.log("Error: Parent element not found!");
            return;
        }
        
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
   

    export const addToCart = (event,id,stock) => {
    
        let arrLocalStorage = getCartFromLS()
    
        const currentProdElem = event.target.closest(".top-cards");
        if (!currentProdElem) {
            console.log("Error: Parent element not found!");
            return;
        }
        let quantity = currentProdElem.querySelector(".mensQuantity").innerText;
        let price = currentProdElem.querySelector(".modal-price").innerText;
        
       
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
    
    document.addEventListener("DOMContentLoaded", () => {
      const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
  })