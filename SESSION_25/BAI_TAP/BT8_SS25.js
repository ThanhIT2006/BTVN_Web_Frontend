let password = prompt("Nhập mật khẩu của bạn:");
function isStrongPassword(password) {
    if (password.length < 8) {
        console.log("Mật khẩu phải có ít nhất 8 ký tự.");
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        console.log("Mật khẩu phải có ít nhất một chữ hoa.");
        return false;
    }
    if (!/[a-z]/.test(password)) {
        console.log("Mật khẩu phải có ít nhất một chữ thường.");
        return false;
    }
    if (!/[0-9]/.test(password)) {
        console.log("Mật khẩu phải có ít nhất một chữ số.");
        return false;
    }
    console.log("Mật khẩu hợp lệ.");
    return true;
}

isStrongPassword(password);


