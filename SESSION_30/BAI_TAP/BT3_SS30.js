let phones = [];
let cart = [];
let choice = 0;
do {
    choice = +prompt(`
        1. Hiển thị danh sách điện thoại theo hãng
        2. Thêm điện thoại mới vào cửa hàng
        3. Tìm kiếm điện thoại theo tên hoặc id
        4. Mua điện thoại (Nhập id và số lượng, cập nhật lại cửa hàng)
        5. Thanh toán tất cả điện thoại trong giỏ hàng
        6. Sắp xếp điện thoại theo giá
        7. Hiển thị tổng số tiền của các điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo từng hãng
        9. Thoát chương trình
    `);
    switch (choice) {
        case 1:
            showByCompany();
            break;
        case 2:
            addPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkout();
            break;
        case 6:
            sortPhoneByPrice();
            break;
        case 7:
            totalPriceInStore();
            break;
        case 8:
            totalQuantityByCompany();
            break;
        default:
            break;
    }
} while (choice != 9);
function showByCompany() {
    let companyName = prompt("Chọn hãng điện thoại bạn muốn hiển thị: ");
    let foundPhones = phones.filter(phone => phone.company.toLowerCase() === companyName.toLowerCase());
    if (foundPhones.length > 0) {
        console.log("Danh sách điện thoại hãng " + companyName + ":");
        foundPhones.forEach(phone => {
            console.log(`
                ID: ${phone.id}
                Name: ${phone.name}
                Price: ${phone.price} VND
                Quantity: ${phone.quantity}
                Company: ${phone.company}
            `);
        });
    } else {
        console.log("Không tìm thấy điện thoại thuộc hãng này.");
    }
}
function addPhone() {
    let id = Math.floor(Math.random() * 9999 + new Date().getMilliseconds());
    let name = prompt("Nhập tên điện thoại: ");
    let price = +prompt("Nhập giá điện thoại: ");
    let quantity = +prompt("Nhập số lượng điện thoại: ");
    let company = prompt("Nhập hãng điện thoại: ");
    let newPhone = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        company: company
    };
    phones.push(newPhone);
    console.log("Điện thoại đã được thêm vào cửa hàng:", newPhone);
}
function searchPhone() {
    let select = +prompt("Nhập lựa chọn tìm điện thoại theo tên hay id (1: theo tên, 2: theo id): ");
    if (select == 1) {
        let name = prompt("Nhập tên điện thoại cần tìm: ");
        let foundPhones = phones.filter(phone => phone.name.toLowerCase().includes(name.toLowerCase()));
        if (foundPhones.length > 0) {
            console.log("Điện thoại tìm thấy:");
            foundPhones.forEach(phone => {
                console.log(`
                    ID: ${phone.id}
                    Name: ${phone.name}
                    Price: ${phone.price} VND
                    Quantity: ${phone.quantity}
                    Company: ${phone.company}
                `);
            });
        } else {
            console.log("Không tìm thấy điện thoại với tên này.");
        }
    } else if (select == 2) {
        let id = prompt("Nhập id của điện thoại cần tìm: ");
        let foundPhone = phones.find(phone => phone.id == id);
        if (foundPhone) {
            console.log("Điện thoại tìm thấy:");
            console.log(`
                ID: ${foundPhone.id}
                Name: ${foundPhone.name}
                Price: ${foundPhone.price} VND
                Quantity: ${foundPhone.quantity}
                Company: ${foundPhone.company}
            `);
        } else {
            console.log("Không tìm thấy điện thoại với id này.");
        }
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
}
function buyPhone() {
    let id = +prompt("Nhập id điện thoại cần mua: ");
    let phoneIndex = phones.findIndex(phone => phone.id == id);
    if (phoneIndex !== -1) {
        let quantity = +prompt("Nhập số lượng bạn muốn mua: ");
        if (quantity <= phones[phoneIndex].quantity) {
            phones[phoneIndex].quantity -= quantity;
            let cartIndex = cart.findIndex(item => item.id == id);
            if (cartIndex === -1) {
                cart.push({ id, name: phones[phoneIndex].name, price: phones[phoneIndex].price, quantity });
            } else {
                cart[cartIndex].quantity += quantity;
            }
            console.log("Mua điện thoại thành công!");
            console.log("Giỏ hàng hiện tại:", cart);
        } else {
            console.log(`Số lượng không đủ. Số lượng hiện có trong kho: ${phones[phoneIndex].quantity}`);
        }
    } else {
        console.log("Điện thoại không có trong kho.");
    }
}
function checkout() {
    let totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log("Tổng tiền thanh toán: " + totalAmount + " VND");
    cart = [];
    console.log("Thanh toán thành công. Giỏ hàng đã được xóa.");
}
function sortPhoneByPrice() {
    let choicesort = +prompt(`
        1. Sắp xếp tăng dần
        2. Sắp xếp giảm dần
    `);
    if (choicesort == 1) {
        phones.sort((a, b) => a.price - b.price);
        console.log("Các điện thoại đã được sắp xếp theo giá tăng dần:");
        phones.forEach(phone => {
            console.log(`
                ID: ${phone.id}
                Name: ${phone.name}
                Price: ${phone.price} VND
                Quantity: ${phone.quantity}
                Company: ${phone.company}
            `);
        });
    } else if (choicesort == 2) {
        phones.sort((a, b) => b.price - a.price);
        console.log("Các điện thoại đã được sắp xếp theo giá giảm dần:");
        phones.forEach(phone => {
            console.log(`
                ID: ${phone.id}
                Name: ${phone.name}
                Price: ${phone.price} VND
                Quantity: ${phone.quantity}
                Company: ${phone.company}
            `);
        });
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
}
function totalPriceInStore() {
    let total = phones.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
    console.log("Tổng giá trị của tất cả điện thoại trong kho: " + total + " VND");
}
function totalQuantityByCompany() {
    let companies = {};
    phones.forEach(phone => {
        if (companies[phone.company]) {
            companies[phone.company] += phone.quantity;
        } else {
            companies[phone.company] = phone.quantity;
        }
    });
    console.log("Tổng số lượng điện thoại theo từng hãng:");
    for (let company in companies) {
        console.log(`${company}: ${companies[company]} điện thoại`);
    }
}
