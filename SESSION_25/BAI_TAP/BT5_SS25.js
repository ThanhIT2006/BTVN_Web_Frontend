function int(arr) {
    let integer = [];
    if (Array.isArray(arr)) {
        let count=0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0 && Number.isInteger(arr[i])) {
                integer.push(arr[i]);
                count++;
            }
        }
        if(count==0)
        {
            console.log("ko có số nguyên dương trong mảng");
            return;
        }
        console.log(count);
        return;
    }
    console.log("Mảng ko phù hợp!");
    return;
}
int([5,-6,3.9,10]);