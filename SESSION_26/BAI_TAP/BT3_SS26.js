function filter(emailList) {
    let arr = [];
    emailList.forEach(email => {
        if (email.includes('@') && !email.includes(' ')) {
            arr.push(email);
        }
    });
    return arr;
}

// Ví dụ sử dụng
let emailList = ["John.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com",];
let validEmails = filter(emailList);
console.log(validEmails);
