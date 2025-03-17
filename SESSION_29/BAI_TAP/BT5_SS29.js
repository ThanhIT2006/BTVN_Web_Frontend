let users = [];
let choice = 0;
do {
    choice = +prompt(`
        1. Đăng ký người dùng mới
        2. Đăng nhập người dùng
        3. Thoát
    `);

    switch (choice) {
        case 1:
            registerUser();
            break;
        case 2:
            loginUser();
            break;
        default:
            break;
    }
} while (choice != 3);
function registerUser() {
    let name = prompt("Nhập tên người dùng: ");
    let email = prompt("Nhập email: ");
    let password = prompt("Nhập mật khẩu: ");
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
    if (!emailPattern.test(email)) {
        console.log("Email không hợp lệ. Email phải chứa '@' và kết thúc bằng .com hoặc .vn");
        return;
    }
    let passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passwordPattern.test(password)) {
        console.log("Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 6 ký tự, bao gồm ký tự đặc biệt và ký tự viết hoa.");
        return;
    }
    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        console.log("Email này đã tồn tại, vui lòng chọn email khác.");
        return;
    }
    let newUser = {
        name: name,
        email: email,
        password: password
    };
    users.push(newUser);
    console.log("Đăng ký thành công. Bạn có thể đăng nhập ngay.");
}
function loginUser() {
    let email = prompt("Nhập email: ");
    let password = prompt("Nhập mật khẩu: ");
    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        console.log(`Chào mừng, ${user.name}! Bạn đã đăng nhập thành công.`);
    } else {
        console.log("Đăng nhập thất bại. Vui lòng kiểm tra lại email hoặc mật khẩu.");
    }
}
