let str = "";
let choice;
do {
    choice = +prompt(
        `
        1.Nhập chuỗi
        2.Hiển thị chuỗi
        3.Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
        4.Đảo ngược các chuỗi ký tự
        5.Đếm số lượng từ trong chuỗi ký tự
        6.Tìm kiếm và thay thế các ký tự trong chuỗi gốc
        7.Thoát chương trình
        `
    );
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi:");
            break;
        case 2:
            console.log("Chuỗi hiện tại là: " + str);
            break;
        case 3:
            str = str.trim();
            console.log("Chuỗi sau khi loại bỏ khoảng trắng ở đầu và cuối: " + str);  
            break;
        case 4:
            let rever = str.split("").reverse().join("");
            console.log("Chuỗi sau khi đảo ngược: " + rever);
            break;
        case 5:
            let wordCount = str.split(/\s+/).filter(Boolean).length;
            console.log("Số lượng từ trong chuỗi là: " + wordCount);
            break;
        case 6:
            let findChar = prompt("Nhập ký tự cần tìm:");
            let replaceChar = prompt("Nhập ký tự thay thế:");
            let updatedStr = str.split(findChar).join(replaceChar); 
            console.log(`Chuỗi sau khi thay thế: ${updatedStr}`);
            break;
        default:
            break;
    }
} while (choice !== 7);
