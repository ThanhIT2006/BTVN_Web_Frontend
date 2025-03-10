let arr=[];
let choice=0;
let max=0;
let min=0;
let sum=0;
let check=0;
do {
    choice=+prompt(
        `
        1.Nhập mảng
        2.Hiển thị mảng
        3.Tìm phần thử lớn nhất và nhỏ nhất trong mảng
        4.Tính tổng các phần tử trong mảng
        5.Tìm số lần xuất hiện của một phần tử trong mảng
        6.Sắp xếp mảng tăng dần
        7.Thoát chương trình
        `
    )
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
            
            max=Math.max.apply(Math,arr);
            min=Math.min.apply(Math, arr);
            console.log(` Số lớn nhất là: ${max}`);
            console.log(` Số nhỏ nhất là: ${min}`);
            break;
        case 4:
            for(let i=0;i<arr.length;i++)
            {
                sum+=arr[i];
            }
            console.log(` Tổng mảng là :${sum}`);
            break;
        case 5:
            let input2=+prompt("Nhập phần tử muốn tìm: ");
            for(let i=0;i<arr.length;i++)
            {
                input2==arr[i]? check++ : check;
            }
            check!=0?console.log(` Số ${input2} xuất hiện ${check} lần `): console.log("Số không tồn tại trong mảng") ;   
            break;
        case 6:
            arr.sort();
            console.log(` Mảng được sắp xếp : ${arr}`);
        default:
            break;
    }
} while (choice!=7);