let number = +prompt("Nhập vào số lượng chuỗi bạn muốn nhập vào mảng: ");
let arr = [];
function max() {
    if (Number.isInteger(number)) {
        for (let i = 0; i < number; i++) {
            let input = prompt("Mời bạn nhập chuỗi: ");
            arr.push(input);
        }
    }
    else {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let result = arr.filter((item) => {
        return item.length > 5;
    })
    if (arr.length == 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    console.log(result);
}
max(arr)
