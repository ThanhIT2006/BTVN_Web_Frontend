let arr=[1,4,7,8,3];
let chan=0; 
let le=0;
for(let i=0;i<5;i++)
{
    (arr[i]%2==0)? le+=arr[i]:chan+=arr[i];
}
console.log(` Tổng các số chẵn là: ${chan}`);
console.log(` Tổng các số lẻ là: ${le}`);

