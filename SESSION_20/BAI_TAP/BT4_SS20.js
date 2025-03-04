let string=prompt("Nhập một chuổi bất kì: ");
let find=prompt("Nhập kí tự ban muốn tìm");
let check=-1;
for(let i=0;i< string.length;i++)
{
    if( string[i]==find)
    {
        check++;
        break
    }
}
check==-1 ? console.log("Không tồn tại kí tự cần tìm"): console.log("Tồn tại kí tự cần tìm");
