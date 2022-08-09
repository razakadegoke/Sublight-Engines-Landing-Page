document.getElementById("icon").addEventListener("click", () => {
    if (document.getElementById("nav").style.visibility === "hidden") {
        document.getElementById("nav").style.visibility = "visible"
    }else{
        document.getElementById("nav").style.visibility = "hidden"
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth === 1100) {
        document.getElementById("nav").style.visibility = "hidden"
    }
    if (window.innerWidth > 1100) {
        document.getElementById("nav").style.visibility = "visible"
    }else{
        document.getElementById("nav").style.visibility = "hidden"
    }
})
