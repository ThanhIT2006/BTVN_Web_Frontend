function even(arr) {
    let chan = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                chan.push(arr[i]);
            }
        }
        if (chan.length == 0) {
            console.log("Mảng không chứa số chẵn");
            return;
        }
        console.log(chan);
        return;
    }
    console.log("Dữ liệu không hợp lệ");
    return;
}
even([11,4,65,6]);