let books = [];
let cart = [];
let choice = 0;
do {
    choice = +prompt(`
        1.Hiển thị danh sách sách theo thể loại
        2.Thêm sách mới vào kho
        3.Tìm kiếm sách theo tên hoặc id.
        4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho)
        5.Sắp xêp sách theo giá
        6.Tính tổng số lượng sách đả mua và in ra tổng tiền trong giỏ hàng
        7.Hiển thị tổng số lượng sách trong kho.
        8.Thoát chương trình.
    `);
    switch (choice) {
        case 1:
            show();
            break;
        case 2:
            addBook();
            break;
        case 3:
            searchbook();
            break;
        case 4:
            add();
            break;
        case 5:
            sortbook();
            break;
        case 6:
            bill();
            break;
        case 7:
            allbook();
            break;
        default:
            break;
    }
} while (choice != 8);
function show() {
    let bookcatecory = prompt("Chọn thể loại sách bạn muốn hiển thị: ");
    let foundcategory = books.find(cat => cat.category == bookcatecory);
    if (foundcategory) {
        console.log(books);
    } else {
        console.log("không tim thấy thể loại sách này");
    }
}
function addBook() {
    let id = Math.floor(Math.random() * 999 + new Date().getMilliseconds());
    let name = prompt("Nhập tên sách: ");
    let price = +prompt("Nhập giá sách: ");
    let quantity = +prompt("Nhập số lượng sách: ");
    let category = prompt("Nhập thể loại sách: ");
    let newBook = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        category: category,
    };
    books.push(newBook);
    console.log("Sách đã được thêm vào thư viện:", newBook);
}
function searchbook() {
    let select = +prompt("Nhập lựa chọn tìm sách theo tên hay id (1:theo tên, 2: theo id): ");
    if (select == 1) {
        let name = prompt("Nhập tên sách cần tìm: ");
        let foundBooks = books.filter(book => book.name.toLowerCase().includes(name.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log("Sách tìm thấy:");
            foundBooks.forEach(book => {
                console.log(`
                ID: ${book.id}
                Name: ${book.name}
                Price: ${book.price} VND
                Quantity: ${book.quantity}
                Category: ${book.category}
            `);
            });
        } else {
            console.log("Không tìm thấy sách với tên này.");
        }
    } else if (select == 2) {
        let Id = prompt("Nhập id của sách cần tìm: ");
        let foundBook = books.find((item) => item.id == Id);
        if (foundBook) {
            console.log("Sách tìm thấy:");
            console.log(`
            ID: ${foundBook.id}
            Name: ${foundBook.name}
            Price: ${foundBook.price} VND
            Quantity: ${foundBook.quantity}
            Category: ${foundBook.category}
        `);
        } else {
            console.log("Không tìm thấy sách với id này");
        }
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
}

function add() {
    let Id = +prompt("Nhập id Sách cần mua: ");
    let index = books.findIndex(item => item.id == Id);
    if (index != -1) {
        let quantity = +prompt("Mời bạn nhập số lượng: ");
        if (quantity < books[index].quantity) {
            books[index].quantity -= quantity;
            let check = cart.findIndex(item => item.id == Id);
            if (check == -1) {
                cart.push({
                    id: Id,
                    name: books[index].name,
                    price: books[index].price,
                    quantity: quantity,
                    category: books[index].category,
                });
                console.log("Thêm sách thành công");
                console.log("Giỏ hàng của bạn gồm các sách", cart);
            } else {
                cart[check].quantity += quantity;
                console.log(cart);
            }
        } else {
            console.log(`Sản phẩm không đủ, số lượng sản phẩm còn lại ${books[index].quantity} `);
        }
    } else {
        console.log("Sách không có trong kho sách");
    }
}
function sortbook() {
    let choicesort = +prompt(`
        1.Sắp xếp tăng dần 
        2.Sắp xếp giảm dần
        `);
    if (choicesort == 1) {
        books.sort((a, b) => a.price - b.price);
        console.log("Các sách đả được sắp xếp tăng dần", books);
    } else if (choicesort == 2) {
        books.sort((a, b) => b.price - a.price);
        console.log("Các sách đả được sắp xếp giảm dần", books);
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
}
function bill() {
    let sum = cart.reduce((total, books) => total + books.price * books.quantity, 0);
    console.log("Tổng tiền phải trả là: ", sum);
}
function allbook() {
    console.log("Tổng số lượng sách trong kho: ", books.length);

}