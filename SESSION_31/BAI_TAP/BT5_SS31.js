const empoly  =[
    {
        id : 1,
        name : "exam1",
        age:"18",
        address:"ha noi",
    },
    {
        id : 2,
        name : "exam3",
        age:"18",
        address:"ha hoi",
    }
];
function show (){
    let str = "";
    for(i=0;i<empoly.length;i++) {
        str+=
        `<tr>
            <td>${empoly[i].id}</td>
            <td>${empoly[i].name}</td>
            <td>${empoly[i].age}</td>
            <td>${empoly[i].address}</td>
        </tr>`;

    }
    document.getElementById("tbody").innerHTML=str;
}
show();