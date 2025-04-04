let contact = [];
let choice = 0;
do {
    choice = +prompt(
        `
        1.Thêm đối tượng Contact vào danh bạ liên hệ.
        2.Hiển thị danh sách danh bạ.
        3.Tìm kiếm thông tin Contact theo số điện thoại.
        4.Cập nhật thông tin Contact (name, email, phone) theo id
        5.Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
        6.Thoát
        `
    )
    switch (choice) {
        case 1:
            add();
            break;
        case 2:
            show();
            break;
        case 3:
            search();
            break;
        case 4:
            update();
            break;
        case 5:
            deleteContact();
            break;
        default:
            break;
    }
} while (choice != 6);
function add() {
    let name = prompt("Nhập tên người liên hệ: ");
    let email = prompt("Nhập Email của người liên hệ: ");
    let phone = prompt("Nhập số điện thoại của người liên hệ: ");
    let id = Math.floor(Math.random() * 9999 + new Date().getMilliseconds());
    let Contact = {
        id: id,
        name: name,
        email: email,
        phone: phone,
    };
    contact.push(Contact);
    console.log("Thêm người liên hệ thành công: ", Contact);
}
function show() {
    if (contact.length == 0) {
        console.log("Không có người liên hệ trong danh bạ!");
        return;
    }
    console.log("\nDanh sách người liên hệ trong danh bạ: ");
    contact.forEach(contact => {
        console.log(`
            ID: ${contact.id}
            Name: ${contact.name}
            Email: ${contact.email}
            Phone: ${contact.phone}
        `);
    })
}
function search() {
    let phone = prompt("Nhập số điện thoại của người muốn tìm :");
    let foundContact = contact.filter(contact => contact.phone.toLowerCase().includes(phone.toLocaleLowerCase()));
    if (foundContact.length > 0) {
        console.log("Thông tin Contact được tìm thấy: ");
        foundContact.forEach(contact => {
            console.log(`
                ID: ${contact.id}
                Name: ${contact.name}
                Email: ${contact.email}
                Phone: ${contact.phone}
            `);
        })
    } else {
        console.log("Không tìm thấy người liên hệ với số điện thoại này!");
    }
}
function update() {
    let id = +prompt("Nhập ID của Contact bạn muốn cập nhật thông tin: ");
    let Contact = contact.findIndex(contact => contact.id === id);
    if (Contact != -1) {
        let newname = prompt("Nhập tên bạn muốn cập nhật: ");
        let newemail = prompt("Nhập email bạn muốn cập nhật: ");
        let newphone = prompt("Nhập số điện thoại bạn muốn cập nhật: ");
        contact[Contact].name = newname;
        contact[Contact].email = newemail;
        contact[Contact].phone = newphone;
        console.log(` Tên mới của contact với id: ${id} đả được cập nhật thành: ${newname}`);
        console.log(` Email mới của contact với id: ${id} đả được cập nhật thành: ${newemail}`);
        console.log(` Phone mới của contact với id: ${id} đả được cập nhật thành: ${newphone}`);
    }
    else {
        console.log(` Không tìm thấy Contact với ID là: ${id}`);
    }
}
function deleteContact() {
    let id = +prompt("Nhập ID người liên hệ bạn muốn xóa: ");
    let index = contact.findIndex(contact => contact.id === id);
    if (index !== -1) {
        let confirmDelete = confirm(` Bạn có chắc chắn muốn xóa sách với ID: ${id}?`);
        if (confirmDelete) {
            contact.splice(index, 1);
            console.log("Contact đả được xóa khỏi danh bạ.");
        }
        else {
            console.log("Hủy xóa sách.");
        }
    }
    else {
        console.log("Không tìm thấy người liên hệ với ID này!");
    }
}