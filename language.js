

    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM Loaded");
        const buttons = document.querySelectorAll(".language-button")
        const buttos = document.querySelectorAll(".lang-button")
       
        buttos.forEach(btn => {
            btn.addEventListener("click", Event => {
                alert("You are Redirecting to the login page ")
                window.location.href = `/login.html`
            })
        })
        
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                const languageCode = event.target.getAttribute("data-lang");
                setLanguage(languageCode)
            })
        })

    const setLanguage = (languageCode) => {
        alert("Sadly, due to a technical glitch, the website only functions in English")
        // localStorage.setItem("preferredLanguage", languageCode)
        window.location.assign("./login.html");

    }
})
