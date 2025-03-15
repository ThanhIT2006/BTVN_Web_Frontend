let books = [];
let choice = 0;
do {
    choice = +prompt(`
        1. Thêm sách mới.
        2. Hiển thị danh sách sách.
        3. Tìm kiếm sách theo tiêu đề.
        4. Cập nhật trạng thái mượn/trả sách theo id sách.
        5. Xóa sách theo id.
        6. Sắp xếp sách theo giá tăng dần.
        7. Thoát
    `);
    switch (choice) {
        case 1:
            addBook();
            break;
        case 2:
            displayBooks();
            break;
        case 3:
            searchByTitle();
            break;
        case 4:
            updateAvailability();
            break;
        case 5:
            deleteBook();
            break;
        case 6:
            sortBooksByPrice();
            break;
        default:
            break;
    }
} while (choice !== 7);
function addBook() {
    let id = +prompt("Nhập mã sách (ID): ");
    let title = prompt("Nhập tên sách: ");
    let author = prompt("Nhập tác giả: ");
    let year = +prompt("Nhập năm xuất bản: ");
    let price = +prompt("Nhập giá sách: ");
    let isAvailable = confirm("Sách có sẵn cho mượn (OK = có sẵn, Cancel = không có sẵn):");
    let newBook = {
        id: id,
        title: title,
        author: author,
        year: year,
        price: price,
        isAvailable: isAvailable
    };

    books.push(newBook);
    console.log("Sách đã được thêm vào thư viện:", newBook);
}
function displayBooks() {
    if (books.length === 0) {
        console.log("Thư viện hiện không có sách nào.");
        return;
    }
    console.log("\nDanh sách sách trong thư viện:");
    books.forEach(book => {
        console.log(`
            ID: ${book.id}
            Tiêu đề: ${book.title}
            Tác giả: ${book.author}
            Năm xuất bản: ${book.year}
            Giá: ${book.price} VND
            Trạng thái: ${book.isAvailable ? 'Có sẵn' : 'Đã mượn'}
        `);
    });
}
function searchByTitle() {
    let title = prompt("Nhập tiêu đề sách cần tìm: ");
    let foundBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (foundBooks.length > 0) {
        console.log("Sách tìm thấy:");
        foundBooks.forEach(book => {
            console.log(`
                ID: ${book.id}
                Tiêu đề: ${book.title}
                Tác giả: ${book.author}
                Năm xuất bản: ${book.year}
                Giá: ${book.price} VND
                Trạng thái: ${book.isAvailable ? 'Có sẵn' : 'Đã mượn'}
            `);
        });
    } else {
        console.log("Không tìm thấy sách với tiêu đề này.");
    }
}
function updateAvailability() {
    let id = +prompt("Nhập ID của sách muốn cập nhật trạng thái mượn/trả: ");
    let book = books.find(b => b.id === id);

    if (book) {
        let newStatus = confirm(`Sách "${book.title}" hiện tại đang ${book.isAvailable ? 'có sẵn' : 'đã mượn'}.\nBạn có muốn thay đổi trạng thái không?`);
        if (newStatus) {
            book.isAvailable = !book.isAvailable;
            console.log(`Trạng thái sách "${book.title}" đã được cập nhật.`);
        } else {
            console.log("Hủy cập nhật trạng thái.");
        }
    } else {
        console.log("Không tìm thấy sách với ID này.");
    }
}
function deleteBook() {
    let id = +prompt("Nhập ID sách muốn xóa: ");
    let index = books.findIndex(b => b.id === id);

    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc chắn muốn xóa sách với ID ${id}?`);
        if (confirmDelete) {
            books.splice(index, 1);
            console.log("Sách đã được xóa khỏi thư viện.");
        } else {
            console.log("Hủy xóa sách.");
        }
    } else {
        console.log("Không tìm thấy sách với ID này.");
    }
}
function sortBooksByPrice() {
    books.sort((a, b) => a.price - b.price);
    console.log("Danh sách sách đã được sắp xếp theo giá tăng dần.");
}
