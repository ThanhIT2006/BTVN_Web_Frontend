let arr=[];
let check=0;
let save=[]
for(let i=0;i<10;i++)
{
    let number=prompt("Nhập mảng 10 số nguyên: ");
    arr.push(number);
}
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>=10)
    {
       check++;
       save.push(arr[i])
    }   
}
check!=0 ? console.log(save): console.log("không có số nào lớn hơn 10");
