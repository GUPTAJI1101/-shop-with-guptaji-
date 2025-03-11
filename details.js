import top from "./api/top.json"

export const details = ()=> {
document.addEventListener("DOMContentLoaded", () => {
  const imgContainer = document.querySelector("#topContainer")
    imgContainer.addEventListener("click", (e)=> {
        if(e.target.classList.contains("top-image")){}

        const card = e.target.closest(".cards")
        const selectedId = card.dataset.id
        const selectedProduct = top.find((p)=>p.id == selectedId)
        if (selectedProduct) {
            localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
           window.location.href = "product.html"
        } 
    })
})
}

