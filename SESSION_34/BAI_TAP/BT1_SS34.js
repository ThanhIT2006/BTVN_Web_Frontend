let users = JSON.parse(localStorage.getItem("users")) || [];
function register() {
    let email = document.getElementById("Email").value.trim();
    let password = document.getElementById("Password").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;
    let errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = "";
    if (!email) {
        errorMessage.innerHTML = "Email không được để trống.";
        return;
    }
    if (!password) {
        errorMessage.innerHTML = "Password không được để trống.";
        return;
    }
    if (password !== confirmPassword) {
        errorMessage.innerHTML = "Passwords không trùng khớp.";
        return;
    }
    if (users.some(user => user.email === email)) {
        errorMessage.innerHTML = "Email đả tồn tại.";
        return;
    }
    let user = {
        email: email,
        password: password,
        confirmpassword: confirmPassword,
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
}