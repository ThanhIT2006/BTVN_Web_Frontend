document.getElementsByClassName("check")[0].addEventListener("click", () => {
    let fixedEmail = "hongvan@gmail.com";
    let email = document.getElementById("email").value;
    if (email === fixedEmail) {
        document.getElementById("valid").innerHTML = "email hợp lệ!";
    } else {
        document.getElementById("valid").innerHTML = "email không hợp";
    }
})
