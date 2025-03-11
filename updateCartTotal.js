import { getCartFromLS } from "./getCartFromLS"

export const updateCartTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal")
    let productTotal = document.querySelector(".productTotal")
    let productShip = document.querySelector(".productShipping")
    let productTax = document.querySelector(".productTax")
    let couponMessage = document.getElementById("couponMessage");  
    let  localCartProducts = getCartFromLS()
    let initialValue = 0 
    let totalProductPrice = localCartProducts.reduce((accum, curElem) =>{
        let productPrice = parseInt(curElem.price) || 0
        return accum + productPrice
    },initialValue)
    let taxAmount = 0.18 * totalProductPrice
    let shipingCharge = 0.30 * totalProductPrice
    let grandTotal = totalProductPrice + taxAmount + shipingCharge

    productSubTotal.textContent = `₹${totalProductPrice.toFixed(2)}`
    productTax.textContent = `₹${taxAmount.toFixed(2)}`
    productTotal.textContent = `₹${grandTotal.toFixed(2)}`
    productShip.textContent = `₹${shipingCharge.toFixed(2)}`

    document.getElementById("applyCoupon").addEventListener("click",()=>{
        let couponInput = document.getElementById("couponInput").value.toUpperCase()
        let discountAmount = 0.25 * totalProductPrice;
        let discountAmount1 = 1 * productTotal;
      
        if(couponInput === "GUPTAJI25" ){
            grandTotal = totalProductPrice + taxAmount + shipingCharge - discountAmount
              couponMessage.textContent = "Coupon Applied: 25% Off!";
              couponMessage.style.color = "green";
        }else {
            couponMessage.textContent = "Invalid Coupon Code!";
            couponMessage.style.color = "red";
        }
        // if(couponInput === "ANSHGUPTAJI" ){
        //     grandTotal = totalProductPrice + taxAmount + shipingCharge - discountAmount1
        //       couponMessage.textContent = "Coupon Applied: 100% Off!";
        //       couponMessage.style.color = "green";
        // }else {
        //     couponMessage.textContent = "Invalid Coupon Code!";
        //     couponMessage.style.color = "red";
        // }
  
        productTotal.textContent = `₹${grandTotal.toFixed(2)}`
        
    } )
}

