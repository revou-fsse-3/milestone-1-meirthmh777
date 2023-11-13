alert("Welcome to CV. MMH CONTRACTOR!");

/*hamburger*/ /*masih mau dicek lagi*/
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

/* darktheme */
var moonicon = document.getElementById("moonicon")

moonicon.onclick = function(){
    document.body.classList.toggle("darktheme");

    if (document.body.classList.contains("darktheme")) {
        moonicon.src ="assets/sun.png";
    } else {
        moonicon.src ="assets/moon.png";
    }
}