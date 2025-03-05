let n=5;
let sum=0;
for(let i=0;i<n;i++)
{
    let number=Number(prompt("Nhập vào số nguyên: "))
    if(number%2!=0)
    {
        sum=sum+number;
    }
}
console.log(` Tổng các số lẻ là: ${sum}`);


