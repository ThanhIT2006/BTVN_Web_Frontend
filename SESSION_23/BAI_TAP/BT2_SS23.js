let arrIndex;
let str = Number(prompt("Nhập vào dãy số bất kì: "));
let arr = str.toString().split("");
let max = arr[0];
if(str!=0)
{
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            arrIndex = i;
        }
    }
    console.log("Số lớn nhất: "+max);
    console.log("Vị trí: "+arrIndex);
}
else
{
    console.log("không có số lớn nhất");

}

