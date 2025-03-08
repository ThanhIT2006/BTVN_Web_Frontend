let arr=[];
let number=+prompt("Nhập số phần tử của mảng: ");
let check=0;
let str=0;
if(number>0)
{
    for(let i=0;i<number;i++)
        {
            let num=prompt("Nhập vào ký tự: ");
            arr.push(num);
        }
        for(let i=0;i<arr.length;i++)
        {
            str=arr[i]-0;
            if(Number.isInteger(str))
            {
                check++;
                console.log(arr[i]); 
            }
        }
}
else
{
    console.log("ko có kí tự số");
    
}