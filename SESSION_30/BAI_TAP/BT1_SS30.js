let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];
let cart = [];
let choice = 0;
do {
    choice = +prompt(`
        1.Hiển thị các sản phẩm theo tên danh mục.
        2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3.Sắp xếp các sản phẩm trong cửa hàng theo giá.
        4.Tính số tiền thanh toán trong giỏ hàng.
        5.Thoát.  
        `)
    switch (choice) {
        case 1:
            showProduct();
            break;
        case 2:
            add();
            console.log("Số lượng sản phẩm còn lại trong kho", products);
            break;
        case 3:
            sortproduct();
            break;
        case 4:
            bill();
            break;
        default:
            break;
    }
} while (choice != 5);
function showProduct() {
    let select = +prompt(`
        1.Món ăn dân tộc Kinh.
        2.Món ăn dân tộc Mông
        `)
    if (select == 1) {
        let result = products.filter(item => item.category == "món ăn dân tộc Kinh");
        console.log(result);
    } else if (select == 2) {
        let result = products.filter(item => item.category == "món ăn dân tộc Mông");
        console.log(result);
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
    return;
}
function add() {
    let Id = +prompt("Nhập id sản phẩm cần mua: ");
    let index = products.findIndex(item => item.id == Id);
    if (index != -1) {
        let quantity = +prompt("Mời bạn nhập số lượng: ");
        if (quantity < products[index].quantity) {
            products[index].quantity -= quantity;
            let check = cart.findIndex(item => item.id == Id);
            if (check == -1) {
                cart.push({
                    id: Id,
                    name: products[index].name,
                    quantity: quantity,
                    category: products[index].category,
                });
                console.log("Thêm sản phẩm thành công");
                console.log("Giỏ hàng của bạn gồm các sản phẩm", cart);
            } else {
                cart[check].quantity += quantity;
                console.log(cart);
            }
        } else {
            console.log(`Sản phẩm không đủ, số lượng sản phẩm còn lại ${products[index].quantity} `);
        }
    } else {
        console.log("Sản phẩm không có trong cửa hàng");
    }
}
function sortproduct() {
    let choicesort = +prompt(`
        1.Sắp xếp tăng dần 
        2.Sắp xếp giảm dần
        `);
    if (choicesort == 1) {
        products.sort((a, b) => a.price - b.price);
        console.log("Các sản phẩm đả được sắp xếp tăng dần", products);
    } else if (choicesort == 2) {
        products.sort((a, b) => b.price - a.price);
        console.log("Các sản phẩm đả được sắp xếp giảm dần", products);
    } else {
        console.log("Lựa chọn không hợp lệ"); 
    }
}
function bill() {
    let sum=cart.reduce((total,products)=>total+products.price * products.quantity,0);
    console.log("Tổng tiền phải trả là: ",sum);
}