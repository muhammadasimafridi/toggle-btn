let toggle = document.querySelector(".toggleBtn");
let body = document.querySelector("body");
let isDark = false;
toggle.addEventListener("click", () => {
    if(isDark) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        toggle.textContent = "☀️"
    } else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
        toggle.textContent = "🌙";
    }
isDark = !isDark;
});