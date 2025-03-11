document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});
})
import top from "./api/top.json"
import acc from "./api/acc.json"
import book from "./api/book.json"
import gad from "./api/gad.json"
import women from "./api/women.json"
import mens from "./api/men.json"
import allProd from "./api/all.json"
import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartFromLS } from "./getCartFromLS";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartTotal } from "./updateCartTotal";

// const allProd = [...acc, ...book, ...gad, ...mens, ...top, ...women];


let cartProduct  = getCartFromLS()

let searchfilterProducts = allProd.filter((curProd) => {
  return cartProduct.some((curElem) => String(curElem.id) === String(curProd.id));
});


let topfilterProducts = top.filter((curProd)=>{
  return cartProduct.some((curElem)=> curElem.id === curProd.id)
 
 })

let filterProducts = mens.filter((curProd)=>{
 return cartProduct.some((curElem)=> curElem.id === curProd.id)

})
let wofilterProducts = women.filter((curProd)=>{
  return cartProduct.some((curElem)=> curElem.id === curProd.id)
 
 })

 let gadfilterProducts = gad.filter((curProd)=>{
  return cartProduct.some((curElem)=> curElem.id === curProd.id)
 
 })
 
 let accfilterProducts = acc.filter((curProd)=>{
  return cartProduct.some((curElem)=> curElem.id === curProd.id)
 
 })

 
 let bookfilterProducts = book.filter((curProd)=>{
  return cartProduct.some((curElem)=> curElem.id === curProd.id)
 
 })

const cartElem = document.querySelector(".cart-cards")
const cartTemp = document.querySelector(".cart-temp")

const showCartProducts = () => {
  cartElem.innerHTML = ""

   filterProducts.forEach((curProd) => {
      const {category, id, image, name, stock, price} = curProd

      let mensClone  = document.importNode(cartTemp.content, true)
      const quantityDropdown = mensClone.querySelector(".cartQuantitySelect");

      const LSactualData = fetchQuantityFromLS(id, price)
      mensClone.querySelector(".cart-card").setAttribute("data-id", id);

      mensClone.querySelector(".cart-span").textContent = category
      mensClone.querySelector(".cartImg").src = image
      mensClone.querySelector(".cart-name").textContent = name
      mensClone.querySelector(".cart-price").textContent =`₹${LSactualData.price.toFixed(2)}`
   
      mensClone.querySelector(".cacartremove").addEventListener("click", () => removeProdFromCart(id));

      quantityDropdown.value = LSactualData.quantity;
      quantityDropdown.setAttribute("data-id", LSactualData.id);
      quantityDropdown.addEventListener("change", (event) => {
        let selectedQuantity = parseInt(event.target.value);
        updateCardQuantity(id, selectedQuantity);
        updateCartTotal()
     });
      cartElem.appendChild(mensClone)
    })
  
      searchfilterProducts.forEach((curProd) => {
          const { category, id, image, name, stock, price } = curProd;
          let searchClone = document.importNode(cartTemp.content, true);
          
          const quantityDropdown = searchClone.querySelector(".cartQuantitySelect");
          const LSactualData = fetchQuantityFromLS(id, price);
          
          searchClone.querySelector(".cart-span").textContent = category;
          searchClone.querySelector(".cartImg").src = image;
          searchClone.querySelector(".cart-name").textContent = name;
          searchClone.querySelector(".cart-price").textContent = `₹${LSactualData ? LSactualData.price.toFixed(2) : price}`;
          searchClone.querySelector(".cacartremove").addEventListener("click", () => {
              console.log(`🗑 Removing Product ID: ${id}`);
              removeProdFromCart(id);
              showCartProducts(); // ✅ UI Refresh after remove
          });
  
          // ✅ Quantity Dropdown
          quantityDropdown.value = LSactualData.quantity;
          quantityDropdown.setAttribute("data-id", LSactualData.id);
          quantityDropdown.addEventListener("change", (event) => {
              let selectedQuantity = parseInt(event.target.value);
              console.log(`🔢 Dropdown Changed: ID = ${id}, New Quantity = ${selectedQuantity}`);
              updateCardQuantity(id, selectedQuantity);
              updateCartTotal();
              showCartProducts(); // ✅ UI Refresh after quantity change
          });
  
          cartElem.appendChild(searchClone);
      });

  
  

    topfilterProducts.forEach((curProd) => {
      const {category, id, image, name, stock, price} = curProd

      let topClone  = document.importNode(cartTemp.content, true)
      const quantityDropdown = topClone.querySelector(".cartQuantitySelect");

      const LSactualData = fetchQuantityFromLS(id, price)
      
      topClone.querySelector(".cart-span").textContent = category
      topClone.querySelector(".cartImg").src = image
      topClone.querySelector(".cart-name").textContent = name
      topClone.querySelector(".cart-price").textContent =`₹${LSactualData.price.toFixed(2)}`
      // womenClone.querySelector(".cartQuantity").textContent =  LSactualData.quantity
      topClone.querySelector(".cacartremove").addEventListener("click", () => removeProdFromCart(id))
      // womenClone.querySelector(".cartplusMinus").addEventListener("click", (event) => {
      //   incDre(event,id,stock,price)
      // })
      quantityDropdown.value = LSactualData.quantity;
      quantityDropdown.setAttribute("data-id", LSactualData.id);
      quantityDropdown.addEventListener("change", (event)=> {
        let selectedQuantity = parseInt(event.target.value)
        updateCardQuantity(id,selectedQuantity)
        updateCartTotal()
      } )
      cartElem.appendChild(topClone)
    })


    wofilterProducts.forEach((curProd) => {
      const {category, id, image, name, stock, price} = curProd

      let womenClone  = document.importNode(cartTemp.content, true)
      const quantityDropdown = womenClone.querySelector(".cartQuantitySelect");

      const LSactualData = fetchQuantityFromLS(id, price)
      
      womenClone.querySelector(".cart-span").textContent = category
      womenClone.querySelector(".cartImg").src = image
      womenClone.querySelector(".cart-name").textContent = name
      womenClone.querySelector(".cart-price").textContent =`₹${LSactualData.price.toFixed(2)}`
      // womenClone.querySelector(".cartQuantity").textContent =  LSactualData.quantity
      womenClone.querySelector(".cacartremove").addEventListener("click", () => removeProdFromCart(id))
      // womenClone.querySelector(".cartplusMinus").addEventListener("click", (event) => {
      //   incDre(event,id,stock,price)
      // })
      quantityDropdown.value = LSactualData.quantity;
      quantityDropdown.setAttribute("data-id", LSactualData.id);
      quantityDropdown.addEventListener("change", (event)=> {
        let selectedQuantity = parseInt(event.target.value)
        updateCardQuantity(id,selectedQuantity)
        updateCartTotal()
      } )
      cartElem.appendChild(womenClone)
    })

     gadfilterProducts.forEach((curProd) => {
      const {category, id, image, name, stock, price} = curProd

      let gClone  = document.importNode(cartTemp.content, true)
      

      const LSactualData = fetchQuantityFromLS(id, price)
      const quantityDropdown = gClone.querySelector(".cartQuantitySelect");
      gClone.querySelector(".cart-span").textContent = category
      gClone.querySelector(".cartImg").src = image
      gClone.querySelector(".cart-name").textContent = name
      gClone.querySelector(".cart-price").textContent =`₹${LSactualData.price.toFixed(2)}`
      // gClone.querySelector(".cartQuantity").textContent =  LSactualData.
      quantityDropdown.value = LSactualData.quantity;
      quantityDropdown.setAttribute("data-id", LSactualData.id);
      gClone.querySelector(".cacartremove").addEventListener("click", () => removeProdFromCart(id))
      // gClone.querySelector(".cartplusMinus").addEventListener("click", (event) => {
      //   incDre(event,id,stock,price)
      // })
      quantityDropdown.value = LSactualData.quantity;
      quantityDropdown.setAttribute("data-id", LSactualData.id);
      quantityDropdown.addEventListener("change", (event)=> {
        let selectedQuantity = parseInt(event.target.value)
        updateCardQuantity(id,selectedQuantity)
        updateCartTotal()
      } )
      cartElem.appendChild(gClone)
    })

    accfilterProducts.forEach((curProd) => {
      const {category, id, image, name, stock, price} = curProd
      let accClone  = document.importNode(cartTemp.content, true)
      
      const quantityDropdown = accClone.querySelector(".cartQuantitySelect");

      const LSactualData = fetchQuantityFromLS(id, price)
      
      accClone.querySelector(".cart-span").textContent = category
      accClone.querySelector(".cartImg").src = image
      accClone.querySelector(".cart-name").textContent = name
      accClone.querySelector(".cart-price").textContent =`₹${LSactualData.price.toFixed(2)}`
      // accClone.querySelector(".cartQuantity").textContent =  LSactualData.quantity
      accClone.querySelector(".cacartremove").addEventListener("click", () => removeProdFromCart(id))
      // accClone.querySelector(".cartplusMinus").addEventListener("click", (event) => {
      //   incDre(event,id,stock,price)
      // })
      quantityDropdown.value = LSactualData.quantity;
      quantityDropdown.setAttribute("data-id", LSactualData.id);
      quantityDropdown.addEventListener("change", (event)=> {
        let selectedQuantity = parseInt(event.target.value)
        updateCardQuantity(id,selectedQuantity)
        updateCartTotal()
      } )
      cartElem.appendChild(accClone)
    })

    bookfilterProducts.forEach((curProd) => {
      const {category, id, image, name, stock, price} = curProd
      let bookClone  = document.importNode(cartTemp.content, true)
      
      const quantityDropdown = bookClone.querySelector(".cartQuantitySelect");

      const LSactualData = fetchQuantityFromLS(id, price)
      
      bookClone.querySelector(".cart-span").textContent = category
      bookClone.querySelector(".cartImg").src = image
      bookClone.querySelector(".cart-name").textContent = name
      bookClone.querySelector(".cart-price").textContent =`₹${LSactualData.price.toFixed(2)}`
      // bookClone.querySelector(".cartQuantity").textContent =  LSactualData.quantity
      bookClone.querySelector(".cacartremove").addEventListener("click", () => removeProdFromCart(id))
      // bookClone.querySelector(".cartplusMinus").addEventListener("click", (event) => {
      //   incDre(event,id,stock,price)
      // })
      quantityDropdown.value = LSactualData.quantity;
      quantityDropdown.setAttribute("data-id", LSactualData.id);
      quantityDropdown.addEventListener("change", (event)=> {
        let selectedQuantity = parseInt(event.target.value)
        updateCardQuantity(id,selectedQuantity)
        updateCartTotal()
      } )
      cartElem.appendChild(bookClone)
    })
}


showCartProducts()

document.addEventListener("DOMContentLoaded", () =>{
   const cartContainer = document.querySelector(".cart-cards")
   cartContainer.addEventListener("change", (event) => {
    if(event.target.classList.contains("cartQuantitySelect")){
      let selectedQuantity = parseInt(event.target.value)
      let productId = event.target.getAttribute("data-id")
      updateCardQuantity(productId,selectedQuantity)
    }
   })
})

const updateCardQuantity = (id,quantity) => {
  let cartItems = JSON.parse(localStorage.getItem("cartProductLS")) || []
  let productIndex = cartItems.findIndex(item => item.id == id)

  if(productIndex !== -1) {
    let pricePerUnit = cartItems[productIndex].price / cartItems[productIndex].quantity
    cartItems[productIndex].quantity = quantity
    cartItems[productIndex].price = pricePerUnit  * quantity
  }
    localStorage.setItem("cartProductLS",JSON.stringify(cartItems))
     showCartProducts()
}

updateCartTotal()

document.addEventListener(("DOMContentLoaded"), ()=> {
  
let cartProduct  = getCartFromLS()

if(cartProduct.length === 0){
   document.querySelector(".cart-cards").innerHTML = ` <img src="./images/empty cart.png" class="empty" alt="empty cart">   <h2 class="empty-title">Oops! Your Cart is Empty</h2>
        <p class="empty-text">Looks like you haven't added anything to your cart yet.</p>
        <button class="return-btn">
            <a href="home.html">Start Shopping</a>
        </button>`
}else{
  showCartProducts()
}
})

const removeAllBtn = document.querySelector(".cacartremoveall");
const toggleRemoveAllButton = () => {
    const cartData = JSON.parse(localStorage.getItem("cartProductLS")) || [];
    if (cartData.length === 0) {
        removeAllBtn.style.display = "none";
    } else {
        removeAllBtn.style.display = "block"; 
    }
};

document.addEventListener("DOMContentLoaded", toggleRemoveAllButton);

removeAllBtn.addEventListener("click", () => {
    localStorage.removeItem("cartProductLS"); 
    setTimeout(() => {
        location.reload(); 
    }, 300);
});















