function checkWorld(str) {
    let capitalizedStr = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)).join(" ");
            console.log("Chuỗi sau khi chuyển đổi: " + capitalizedStr);
}
checkWorld("rIKKei acaDEMy")