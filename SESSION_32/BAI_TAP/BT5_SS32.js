let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTask');
let taskList = document.getElementById('taskList');
addTaskButton.addEventListener('click', () => {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteTask">X</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = ''; 
    }
});
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteTask')) {
        let taskItem = e.target.parentElement;
        let confirmDelete = confirm('Bạn có chắc chắn muốn xóa nhiệm vụ này?');
        if (confirmDelete) {
            taskList.removeChild(taskItem);
        }
    }
});
