let number=Number(prompt("Nhập vào số nguyên bất kì:"));
if(Number.isInteger(number) && number!=0)
{
    for(let i=1;i<=Math.abs(number);i++)
        {
            if(number%i==0)
            {
                console.log(`${i} là ước và ${-i} là ước`);
            }
        }
}
else
{
    console.log("ko hợp lệ!"); 
}