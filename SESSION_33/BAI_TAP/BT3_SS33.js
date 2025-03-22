let dish = [
    { name: `Rau sạch`, category: `Đồ ăn` },
    { name: `Thịt lợn`, category: `Đồ ăn` },
    { name: `Pepsi không calo`, category: `Nước` },
    { name: `Cocacola`, category: `Nước` },
    { name: `Cờ lê`, category: `Dụng cụ` },
    { name: `Tua vít`, category: `Dụng cụ` },
];

function render(items) {
    let str = "";
    for (let i = 0; i < items.length; i++) {
        str += `<li><b>Tên đồ ăn:</b> ${items[i].name} - <b>Danh mục:</b> ${items[i].category}</li>`;
    }
    document.getElementById("dishList").innerHTML = str;
}

function filter() {
    let selectedCategory = document.getElementById("categorySelect").value;
    if (selectedCategory) {
        let filteredDish = dish.filter(item => item.category === selectedCategory);
        render(filteredDish);
    } else {
        render(dish);
    }
}
render(dish);