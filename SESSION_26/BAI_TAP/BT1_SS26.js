let arr = [];
function fill() {
    for (let i = 0; i < 10; i++) {
        let input = +prompt("Nhập số nguyên vào mảng: ");
        if (Number.isInteger(input)) {
            arr.push(input);
        }
        else {
            console.log("Dữ liệu không hợp lệ");
            break;
        }

    }
    let result = arr.filter((item) => {
        return item >= 10;
    })
    if (arr.length==0) {
        console.log("Mảng không có phần tử");    
        return;
    }
    console.log(result);
    return;
}
fill(arr);



