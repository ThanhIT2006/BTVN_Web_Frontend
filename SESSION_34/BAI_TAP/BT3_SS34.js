let users = JSON.parse(localStorage.getItem("users")) || [];

function login() {
    let email = document.getElementById("LoginEmail").value.trim();
    let password = document.getElementById("LoginPassword").value;
    let loginErrorMessage = document.getElementById("login-error-message");
    loginErrorMessage.innerHTML = "";

    if (!email) {
        loginErrorMessage.innerHTML = "Email không được để trống.";
        return;
    }
    if (!password) {
        loginErrorMessage.innerHTML = "Password không được để trống.";
        return;
    }

    let validUser = users.find(user => user.email === email && user.password === password);
    if (validUser) {
        alert("Đăng nhập thành công!");
    } else {
        loginErrorMessage.innerHTML = "Email hoặc Password không chính xác.";
    }
}