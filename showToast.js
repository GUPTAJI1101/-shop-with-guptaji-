const showToast = (message) => {
    let toast = document.getElementById("toast");  // ✅ HTML wale toast div ko select kar raha hai
    toast.innerText = message;  // ✅ Toast me message set karega
    toast.style.display = "block";  // ✅ Toast ko dikhayega

    // ⏳ 2 second baad toast ko hide karega
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
};
