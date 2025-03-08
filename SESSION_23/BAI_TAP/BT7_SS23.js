let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
if (n < 2) {
    alert("Mảng phải có ít nhất 2 phần tử để tìm số lớn thứ hai.");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
    }
    let max1 = arr[0];
    let max2 = arr[1];
    if (max1 < max2) {
        max1 = arr[1];
        max2 = arr[0];
    }
    for (let i = 2; i < n; i++) {
        if (arr[i] > max1) {
            max2 = max1; 
            max1 = arr[i];
        } else if (arr[i] > max2 && arr[i] !== max1) {
            max2 = arr[i]; 
        }
    }
    if (max1 === max2) {
        console.log("Không có số lớn thứ hai trong mảng.");

    } else {
        console.log("Số lớn thứ hai trong mảng là: " + max2);

    }
}
