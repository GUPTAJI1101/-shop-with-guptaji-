 const toggleSeeMoreLess = (selector) => {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(selector ).forEach((card) => {
        const moreText = card.querySelector(".hidden-text"); 
        const button = card.querySelector(".toggle-btn");
  
        if (moreText && button) {
          button.addEventListener("click", () => {
            if (moreText.style.display === "none" || moreText.style.display === "") {
              moreText.style.display = "block"; 
              button.textContent = "See Less ⬆️"; 
            } else {
              moreText.style.display = "none"; 
              button.textContent = "See More ⬇️";
            }
          });
        }
      });
    });
  };
  
  

export const seeMoreLess = () => toggleSeeMoreLess(".cards")
export const seeeMoreLess = () => toggleSeeMoreLess(".wo-cards")
export const gadSeeMoreLess = () => toggleSeeMoreLess(".gad-cards")
export const accSeeMoreLess= () => toggleSeeMoreLess(".acc-cards")
export const bookSeeMoreLess = () => toggleSeeMoreLess(".book-cards")
