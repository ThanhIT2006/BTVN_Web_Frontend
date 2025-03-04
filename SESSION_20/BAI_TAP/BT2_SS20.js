let number=Number(prompt("Nhập 1 số bất kì: "));
let number1=" ";
if(number<=0 || !Number.isInteger(number))
{
    console.log("Dữ liệu nhập không hợp lệ!");
}
else
{
    for(i=1;i<=number;i++)
    {
        if(i%5==0)
        {
            number1=number1+i+", ";
        }
    }
    console.log(` Các số chia hết cho 5 từ 1 đến ${number} là ${number1}`);
}