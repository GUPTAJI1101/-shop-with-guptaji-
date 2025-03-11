export const category = () => {
    document.getElementById("booksCategory").addEventListener("click", function () {
        document.querySelector(".books").scrollIntoView({ behavior: "smooth" });
    });
    
    document.getElementById("womensCategory").addEventListener("click", function () {
        document.querySelector(".trend-women").scrollIntoView({ behavior: "smooth" });
    });
    
    document.getElementById("gadgetsCategory").addEventListener("click", function () {
        document.querySelector(".gadgets").scrollIntoView({ behavior: "smooth" });
    });
    
    document.getElementById("accCategory").addEventListener("click", function () {
        document.querySelector(".accessories").scrollIntoView({ behavior: "smooth" });
    });   
}