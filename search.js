
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});

const placeholderTags = [
    "Search For Kurti",
    "Search For Underwear",
    "Search For Laptop",
    "Search For Accessories",
    "Search For Mobile",
    "Search For Books"
];

let index = 0, charIndex = 0, isDeleting = false;
const searchInput = document.querySelector(".search");

const typeEffect = () => {
    const currentText = placeholderTags[index];
    isDeleting ? charIndex-- : charIndex++;
    searchInput.setAttribute("placeholder", currentText.substring(0, charIndex));

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % placeholderTags.length;
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
};

typeEffect();

import acc from "./api/acc.json";
import book from "./api/book.json";
import gad from "./api/gad.json";
import men from "./api/men.json";
import top from "./api/top.json";
import women from "./api/women.json";
import allProd from "./api/all.json"
import { getCartFromLS } from "./getCartFromLS";
import { updateCartValue } from "./updateCartValue";

// const allProd = [...acc, ...book, ...gad, ...men, ...top, ...women];

const searchContainer = document.querySelector(".search-container");
const searchTemplate = document.querySelector("#search-temp");

const searchProducts = (query) => {
    return allProd.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()));
};

const displayResult = (products) => {
    searchContainer.innerHTML = "";
    products.forEach(product => {
        const templateClone = searchTemplate.content.cloneNode(true);
        templateClone.querySelector(".men-span").textContent = product.category;
        templateClone.querySelector(".men-name").textContent = product.name;
        templateClone.querySelector(".men-price").textContent = `₹${product.price}`;
        templateClone.querySelector(".menActual-price").textContent = `₹${product.price * 5}`;
        templateClone.querySelector(".men-stock").textContent = product.stock;
        templateClone.querySelector(".men-des").textContent = product.description;
        templateClone.querySelector(".men-img").src = product.image;
        templateClone.querySelector(".cards-search").setAttribute("data-id", product.id);


        searchContainer.appendChild(templateClone);
        //    document.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
        //          addToCart(event,id,stock)
        //       })
    });
};

document.querySelector(".search-container").addEventListener("click", (event) => {
    if (event.target.classList.contains("cartIncrement") || event.target.classList.contains("cartDecrement")) {
        const currentCardElement = event.target.closest(".cards-search");
        
        if (!currentCardElement) {
            console.log("Error: Parent element not found!");
            return;
        }

        const productQuantity = currentCardElement.querySelector(".mensQuantity");
        const stock = parseInt(currentCardElement.querySelector(".men-stock").textContent);
        
        let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

        if (event.target.classList.contains("cartIncrement")) {
            if (quantity < stock) {
                quantity += 1;
            }
        } else if (event.target.classList.contains("cartDecrement")) {
            if (quantity > 1) {
                quantity -= 1;
            }
        }

        productQuantity.innerText = quantity;
        productQuantity.setAttribute("data-quantity", quantity);
    }
});

document.querySelector(".search-container").addEventListener("click", (event) => {
    if (!event.target.classList.contains("add-to-cart-button")) return;

    let arrLocalStorage = getCartFromLS();
    const currentProdElem = event.target.closest(".cards-search");
    if (!currentProdElem) {
        console.log("Error: Parent element not found!");
        return;
    }

    let id = currentProdElem.getAttribute("data-id"); 
    let quantity = Number(currentProdElem.querySelector(".mensQuantity").innerText);
    let price = currentProdElem.querySelector(".men-price").innerText.replace("₹", "");
    price = Number(price);

    let existingProd = arrLocalStorage.find((curProd) => curProd.id === id);

    if (existingProd) {
        quantity = Number(existingProd.quantity) + quantity;
        price = price * quantity;

        let updateCart = arrLocalStorage.map((curProd) => {
            return curProd.id === id ? { id, quantity, price } : curProd;
        });

        localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
        updateCartValue(updateCart);
    } else {
        arrLocalStorage.push({ id, quantity, price });
        localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorage));
        updateCartValue(arrLocalStorage);
    }

    
    displayResult(searchProducts(document.querySelector(".search").value.trim())); 
});


document.querySelector(".search").addEventListener("input", (e) => {
    const query = e.target.value.trim();
    const filteredProducts = searchProducts(query);
    displayResult(filteredProducts);
});



const searchInput1 = document.querySelector("#searchInput");
const defaultContent = document.querySelector("#defaultContent");
const searchResults = document.querySelector("#searchResults");

searchInput1.addEventListener("input", () => {
    if (searchInput1.value.trim() === "") {
        defaultContent.style.display = "block";  
        location.reload(2000)
        // searchResults.style.display = "none";   
        searchResults.innerHTML= ""
    } else {
        defaultContent.style.display = "none";   
        
    }
});
