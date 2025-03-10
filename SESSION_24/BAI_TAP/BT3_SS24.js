let arr = [];
let choice = 0;
let sum = 0;
let avg = 0;
let check=true;
let count=0;
do {
    choice = +prompt(
        `
        1.Nhập mảng số nguyên
        2.Hiển thị mảng
        3.Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4.Tính tổng và trung bình cộng của các số dương trong mảng
        5.Đảo ngược mảng
        6.Kiểm tra mảng có đối xứng không
        7.Thoát chương trình
        `
    )
    switch (choice) {
        case 1:
            let input = +prompt("Nhập số lượng phần tử vào mảng");
            if (Number.isInteger(input) && input > 0) {
                for (let i = 0; i < input; i++) {
                    let n = +prompt(`Nhập phần tử ${i + 1} vào mảng:`);
                    arr.push(n);
                }
            }
            else {
                console.log(` Mảng phải là số nguyên dương`);
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let max = Math.max.apply(Math, arr);
            let search = arr.indexOf(max);
            console.log(` Chỉ số của phần tử lớn nhất là: ${search}`);
            break;
        case 4:
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count++;
                }
            }
            avg = sum / arr.count;
            console.log(` Trung bình cộng của mảng là :${avg}`);
            break;
        case 5:
            let rever=arr.reverse();
            alert(rever);
            break;
        case 6:
            for(let i=0;i<=arr.length/2;i++)
                {
                    if(arr[i] != arr[arr.length -1 -i])
                    {
                        check=false;
                        break;
                    }
                }
            check==true? console.log("Đây là số đối xứng"): console.log("Đây không phải số đối xứng");
            break;
        default:
            break;
    }
} while (choice != 7);