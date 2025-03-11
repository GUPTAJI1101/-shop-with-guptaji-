export const btnScroll = () => {
  document.addEventListener("DOMContentLoaded", () => {
      const topContainer = document.querySelector("#topContainer");
      const menContainer = document.querySelector("#menContainer");
      const leftScroll = document.querySelector(".left-scroll-btn");
      const rightScroll = document.querySelector(".right-scroll-btn");
      const rightScroll2 = document.querySelector(".right-scroll-bttn");
        const leftScroll2 = document.querySelector(".left-scroll-bttn");
      const scrollAmt = 380;

      leftScroll.addEventListener("click", () => {
          topContainer.scrollBy({ left: -scrollAmt, behavior: "smooth" });
      });

      rightScroll.addEventListener("click", () => {
          topContainer.scrollBy({ left: scrollAmt, behavior: "smooth" });
      });

        leftScroll2.addEventListener("click", () => {
            menContainer.scrollBy({ left: -scrollAmt, behavior: "smooth" });
        });

        rightScroll2.addEventListener("click", () => {
            menContainer.scrollBy({ left: scrollAmt, behavior: "smooth" });
        });

 
  });
};
