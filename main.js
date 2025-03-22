const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTask = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;
        span.classList.add('task-text');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';

        newTask.appendChild(span);
        newTask.appendChild(deleteBtn);

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-text')) {
        event.target.classList.toggle('completed');
    } else if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
    }
});







