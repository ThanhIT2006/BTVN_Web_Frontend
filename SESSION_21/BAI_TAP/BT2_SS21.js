let n=5;
let sumchan = 0;
let sumle = 0;
for(let i=0;i<n;i++)
{
    let number=Number(prompt("Nhập số nguyên: "));
    if(number%2==0)
    {
        sumchan++;
    }
    else
    {
        sumle++;
    }
    
}
    console.log(`Số lượng số chẵn là : ${sumchan}`);
    console.log(` Số lượng số lẻ là: ${sumle}`);


