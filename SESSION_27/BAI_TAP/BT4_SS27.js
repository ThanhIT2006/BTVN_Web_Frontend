let arr = [];
let choice = 0;
do {
    choice = +prompt(
        `
        1.Nhập danh sách số nguyên
        2.Tính trung bình các số
        3.Tìm số chẵn lớn nhất
        4.Tìm số lẻ nhỏ nhất
        5.Thoát
        `
    )
    switch (choice) {
        case 1:
            add();
            break;
        case 2:
            ave();
            break;
        case 3:
            maxeven();
            break;
        case 4:
            minodd();
            break;

        default:
            break;
    }
} while (choice != 5);
function add() {
    let listNumber = +prompt("Nhập số lượng số nguyên vào danh sách: ");
    if (Number.isInteger(listNumber)) {
        for (let i = 0; i < listNumber; i++) {
            let number = +prompt(` Nhập vào số nguyên thứ ${i + 1}: `);
            if (Number.isInteger(number)) {
                arr.push(number);
            }
            else {
                console.log("Số nguyên không hợp lệ");
                return;
            }
        }
    }
    else {
        console.log("Số lượng không hợp lệ");
        return;
    }
    return;
}
function ave() {
    let sum = 0;
    let aver=0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        aver = sum / arr.length;
    }
    console.log("Trung bình các số trong mảng là: " + aver);
    return;
}
function maxeven() {
    let maxInNumbers=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            maxInNumbers = Math.max.apply(Math, arr);
        }
    }
    console.log("Số chẵn lớn nhất là: "+maxInNumbers);
}
function minodd() {
    let minInNumbers=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            minInNumbers = Math.min.apply(Math, arr);
        }
    }
    console.log("Số lẻ nhỏ nhất là: "+minInNumbers);
}