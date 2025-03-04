
let a=Number(prompt("Nhập số a bất kì: "));
let b=Number(prompt("Nhập số b bất kì: "));
let result=1;
if(a!=0 && Number.isInteger(a) && Number.isInteger(b))
{
    for(let i=0;i<Math.abs(b);i++)
    {
        b>0 ?result*=a: result*=1/a;
    }
    console.log(result);
}
else
{
    console.log("Không hợp lệ!");
}