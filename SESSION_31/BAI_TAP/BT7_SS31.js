let todolist = [
    {
        id: 1,
        task: "Hit the gym",
        completed: false,
    },
    {
        id: 2,
        task: "Pay bills",
        completed: true,
    },
    {
        id: 3,
        task: "Met george",
        completed: false,
    },
    {
        id: 4,
        task: "Buy eggs",
        completed: false,
    },
    {
        id: 5,
        task: "Read a book",
        completed: false,
    },
    {
        id: 6,
        task: "Organize Office",
        completed: false,
    },

];
function show() {
    let str = "";
    for (i = 0; i < todolist.length; i++) {
        str += `<li class="${todolist[i].completed ? "checked" : ""}" onclick="tick(${i})">
                  ${todolist[i].task}
                  <span class="close" onclick="delet(event, ${i})">&times;</span>
                </li>`;
    }
    document.getElementById("myUL").innerHTML = str;
}

function tick(index) {
    todolist[index].completed = !todolist[index].completed;
    show();
}
show();