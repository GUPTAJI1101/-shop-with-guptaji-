// export const login = () => {
   document.addEventListener("DOMContentLoaded", () => {
       const emailInput = document.getElementById("gmail-g");
       const otpInput = document.getElementById("opt");
       const loginButton = document.getElementById("login");
       const submitButton = document.getElementById("loginBtn");


       const isValidEmail = (email) => {
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           return emailRegex.test(email);
       };

  
       const generateOTP = () => "0000";

       loginButton.addEventListener("click", (evet) => {
           evet.preventDefault();

           const emailValue = emailInput.value.trim();

           if (!emailValue) {
               alert("Please enter your email first.");
               return;
           }

           if (!isValidEmail(emailValue)) {
               alert("Please enter a valid email address.");
               return;
           }

           alert(`Your OTP is ${generateOTP()}`);
           otpInput.value = generateOTP(); 
       });

       submitButton.addEventListener("click", (event) => {
           event.preventDefault(); 

           const otpValue = otpInput.value.trim();

           if (otpValue === generateOTP()) {
               alert("Your OTP is verified. Redirecting you to the home page...");
               window.location.href = "home.html";
           } else {
               alert("Invalid OTP. Try again.");
           }
       });
   });
// };
