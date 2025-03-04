let number=Number(prompt("Nhập một số bất kì: "));
let sum=0;
if(number<=0 || !Number.isInteger(number))
{
    console.log("Dữ liệu nhập không hợp lệ");
}
else
{
  
    for(let i=0;i<=number;i++)
    {
        sum=sum+i;
    }
    console.log(sum);
}