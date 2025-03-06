let str= Number(prompt("Nhập vào dãy số bất kì: "));
let arr=str.toString().split("");
let max=arr[0];
if(Number.isInteger(str))
{
    for(let i=0;i<arr.length;i++)
    {
        if(max<arr[i])
        {
            max=arr[i];
        }
    }
    console.log(max);
}
else
{
    console.log("Dãy số không hợp lệ");
    
}