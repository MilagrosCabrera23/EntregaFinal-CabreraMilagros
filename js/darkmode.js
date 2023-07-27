const darkMode = document.getElementById("darkmode");

if (localStorage.getItem("ModoDark")) {
    if (JSON.parse(localStorage.getItem("ModoDark")) == true) {
        document.body.classList.add("dark");
    }
} else {
    localStorage.setItem("ModoDark", false);
}

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark"); 

    if (JSON.parse(localStorage.getItem("ModoDark")) == false) {
        localStorage.setItem("ModoDark", true);

    } else if (JSON.parse(localStorage.getItem("ModoDark")) == true) {
        localStorage.setItem("ModoDark", false);
    }
});
