let arrNum = +prompt("Nhập số lượng phân tử trong mảng: ");
let arr = [];
if (Number.isInteger(arrNum)) {
    for (let i = 0; i < arrNum; i++) {
        let arrele = +prompt(` Nhập phần tử thứ ${i + 1}: `);
        if (Number.isInteger(arrele)) {
            arr.push(arrele);
        }
        else {
            console.log("Phần tử ko hợp lệ");

        }
    }
}
else {
    console.log("Số lượng phần tử không hợp lệ");
}
let arrQuantity = +prompt("Nhập số mảng con muốn chia");
let arr2 = [];
function splitArray(arr, arrQuantity) {
    for (let i = 0; i < arr.length; i += arrQuantity) {
        arr2.push(arr.slice(i, i + arrQuantity));
    }
    console.log(arr2);
    return;
}

let result = splitArray(arr, arrQuantity);
console.log(result);
