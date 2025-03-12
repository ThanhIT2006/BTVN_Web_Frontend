function day(array) {
    if (!Array.isArray(array)) {
        console.log("Dữ liệu nhập không hợp lệ!");
        return;
    }
    let result = array.map(date => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            let [year, month, day] = date.split("-");
            return `${day}/${month}/${year}`;
        }
        return null;
    }).filter(date => date !== null);
    if (array.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    console.log(result);
}
day(["2025-03-10", "2024-12-25", "2023-07-01"]);