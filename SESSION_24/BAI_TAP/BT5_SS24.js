let arr = [];
let choice;
do {
    choice = +prompt(
        `
        1.Nhập mảng 2 chiều
        2.Hiển thị mảng 2 chiều
        3.Tính tổng các phần tử trong mảng
        4.Tính tổng đường chéo chính
        5.Tính tổng đường chéo phụ
        6.Tính trung bình cộng các phần tử trong một hàng hoặc một cột
        7.Thoát chương trình
        `
    );
    switch (choice) {
        case 1:
            let rows = +prompt("Nhập số lượng hàng:");
            let cols = +prompt("Nhập số lượng cột:");
            arr = [];
            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    let value = +prompt(`Nhập giá trị cho phần tử tại hàng ${i + 1}, cột ${j + 1}:`);
                    row.push(value);
                }
                arr.push(row);
            }
            break;
        case 2:
            console.log("Mảng 2 chiều:");
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i].join(" "));
            }
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    sum += arr[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng là: " + sum);
            break;
        case 4:
            let diagonalSum1 = 0;
                let size1 = arr.length;
                for (let i = 0; i < size1; i++) {
                    diagonalSum1 += arr[i][i];
                }
                console.log("Tổng đường chéo chính là: " + diagonalSum1);
            break;
        case 5:
            let diagonalSum2 = 0;
            let size2 = arr.length; 
            for (let i = 0; i < size2; i++) {
                diagonalSum2 += arr[i][size2 - i - 1];
            }
            console.log("Tổng đường chéo phụ là: " + diagonalSum2);
            break;
        case 6:
            let type = prompt("Nhập loại tính toán (hàng hoặc cột):").toLowerCase();
            if (type === "hàng") {
                let rowIndex = +prompt("Nhập chỉ số hàng cần tính trung bình cộng:");
                if (rowIndex < 0 || rowIndex >= arr.length) {
                    console.log("Hàng không hợp lệ!");
                } else {
                    let sum = 0;
                    for (let j = 0; j < arr[rowIndex].length; j++) {
                        sum += arr[rowIndex][j];
                    }
                    let average = sum / arr[rowIndex].length;
                    console.log(`Trung bình cộng của hàng ${rowIndex + 1} là: ` + average);
                }
            } else if (type === "cột") {
                let colIndex = +prompt("Nhập chỉ số cột cần tính trung bình cộng:");
                if (colIndex < 0 || colIndex >= arr[0].length) {
                    console.log("Cột không hợp lệ!");
                } else {
                    let sum = 0;
                    for (let i = 0; i < arr.length; i++) {
                        sum += arr[i][colIndex];
                    }
                    let average = sum / arr.length;
                    console.log(`Trung bình cộng của cột ${colIndex + 1} là: ` + average);
                }
            } else {
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn 'hàng' hoặc 'cột'.");
            }
            break;
        default:
            break;
    }
} while (choice !== 7);
