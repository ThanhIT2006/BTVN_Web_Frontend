let users = [];
function isValidEmail(email) {
    let emailRegex = /@.*\.(com|vn)$/;
    return emailRegex.test(email);
}
function registerAccount() {
    let email = prompt("Nhập tài khoản email muốn đăng ký:");
    if (!isValidEmail(email)) {
        console.log("Email không hợp lệ. Email phải chứa ký tự '@' và kết thúc bằng '.com' hoặc '.vn'.");
        return;
    }
    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        console.log("Đăng ký thành công!");
    }
}
registerAccount();
