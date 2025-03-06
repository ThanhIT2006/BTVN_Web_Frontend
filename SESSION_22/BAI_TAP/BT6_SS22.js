let number=[2,5,7,4,1,8,6,2,5,7];
let input=+prompt("Nhập số nguyên bất kì: ");
let check=0;
if(Number.isInteger(input))
{
    for(let i=0;i<number.length;i++)
        {
            input==number[i] ? check++ : check;
        }
        check!=0?console.log(` Số ${input} xuất hiện ${check} lần `): console.log("Số không tồn tại trong mảng") ;   
}
else
{
    console.log("Số không hợp lệ");
}