let arr=[];
let choice=0;
let chan=[];
let le=[];
let avg=0;
let sum=0;
do {
    choice=+prompt(
        `
        1.1 Nhập mảng số nguyên
        2.2 Hiển thị mảng
        3.3 Tìm các phần tử chãn lẻ
        4.4 Tính trung bình cộng của mảng
        5.5 Xóa phần tử tại vị tri chỉ định
        6.6 Tìm phần tử lớn thứ hai trong mảng
        7.7 Thoát chương trình
        `
    );
    switch (choice) {
        case 1:
            let input=+prompt("Nhập số lượng phần tử vào mảng");
            for(let i=0;i<input;i++)
            {
                let n=+prompt(`Nhập phần tử ${i+1} vào mảng:`);
                arr.push(n);
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            for(let i=0;i<arr.length;i++)
            {
                arr[i]%2==0?chan.push(arr[i]):le.push(arr[i]);
            }
            console.log(` Các phần tử chẵn trong mảng: ${chan}`);
            console.log(` Các phần tử lẻ trong mảng: ${le}`);
            break;
        case 4:
            for(let i=0;i<arr.length;i++)
                {
                    sum+=arr[i];
                    avg=sum/arr.length;
                }
                console.log(` Trung bình cộng của mảng là :${avg}`);
            break;
        case 5:
            let input2=+prompt("Nhập vị trí phần tử muốn xóa: ");
            if(input2< arr.length && Number.isInteger(input2) )
            {
                let delet=arr.splice(input2,1);
            }
            else
            {
                console.log(` Vị trí không hợp lệ`);
            }
            break;
        case 6: 
            let max1 = arr[0];
            let max2 = arr[1];
            if (max1 < max2) {
                max1 = arr[1];
                max2 = arr[0];
            }
            for (let i = 2; i < arr.length; i++) {
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
            break;
        default:
            break;
    }
} while (choice!=7);