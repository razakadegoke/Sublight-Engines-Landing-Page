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

// SENDING EMAIL
const submit = document.getElementById("send_email")

submit.addEventListener("click", () =>  {
    var language = document.getElementById("language").value
    var params =  {
        name: document.getElementById("name").value,
        email_id: document.getElementById("email_id").value
    }

    if (language === "english") {
        emailjs.send("service_o7jktmv","template_log7gp4",params)
        alert("Message Send!")
    } else if (language === "french") {
        emailjs.send("service_o7jktmv","template_vllyk7s",params)
        alert("Message Send!")
    } else {
        alert("Please select a language")
    }
})


