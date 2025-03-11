let input = prompt("Nhập chuỗi bất kì: ");
function sym(input) {
    let reverStr = input.split("").reverse().join("");
    if (input === reverStr) {
        console.log("Chuỗi là chuỗi đối xứng.");
    } else {
        console.log("Chuỗi không phải là chuỗi đối xứng.");
    }
}
sym(input);