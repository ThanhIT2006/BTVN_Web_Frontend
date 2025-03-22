function onclick1() {
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.querySelector(".input_password").type = "text";
}

function onclick2() {
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.querySelector(".input_password").type = "password";
}
document.getElementById("open").addEventListener("click", onclick1);
document.getElementById("close").addEventListener("click", onclick2);