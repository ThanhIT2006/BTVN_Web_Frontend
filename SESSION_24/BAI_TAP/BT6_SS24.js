let str = "";
let choice;
do {
    choice = +prompt(
       `
       1.Nhập chuỗi
       2.Hiển thị chuỗi
       3.Tính độ dài của chuỗi
       4.Dếm số lần xuất hiện của một ký tự trong chuỗi
       5.Kiểm tra chuỗi có phải chuỗi đối xứng hay không
       6.Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
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
            console.log("Độ dài của chuỗi là: " + str.length);
            break;
        case 4:
            let char = prompt("Nhập ký tự cần đếm:");
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === char) {
                    count++;
                }
            }
            console.log(`Số lần xuất hiện của ký tự '${char}' trong chuỗi là: ${count}`);
            break;
        case 5:
            let reverStr = str.split("").reverse().join("");
            if (str === reverStr) {
                console.log("Chuỗi là chuỗi đối xứng.");
            } else {
                console.log("Chuỗi không phải là chuỗi đối xứng.");
            }
            break;
        case 6:
            let capitalizedStr = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            console.log("Chuỗi sau khi chuyển đổi: " + capitalizedStr);
            break;
        default:
            break;
    }
} while (choice !== 7);
