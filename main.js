
function loadTasks() {

    const taskWrapper = document.querySelector('.js--todos-wrapper');
    taskWrapper.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}

function createTaskElement(text, completed) {
    const taskWrapper = document.querySelector('.js--todos-wrapper');
    const li = document.createElement('li');
    li.classList.add('todo-item');
    if (completed) {
        li.classList.add('todo-item--checked');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.addEventListener('click', function() {
        li.classList.toggle('todo-item--checked');
        saveTasks();
    });

     const span = document.createElement('span');
    span.classList.add('todo-item__description');
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-item__delete');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.addEventListener('click', function() {
        li.remove();
        saveTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskWrapper.appendChild(li);
}


function saveTasks() {
    const tasks = [];
    const taskElements = document.querySelectorAll('.todo-item');
    taskElements.forEach(task => {
        const text = task.querySelector('.todo-item__description').textContent;
        const completed = task.classList.contains('todo-item--checked');
        tasks.push({ text, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.querySelector('.js--form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.querySelector('.js--form__input');
    const taskText = input.value.trim();
    if (taskText) {
        createTaskElement(taskText, false);
        input.value = '';
        saveTasks();
    }
});

window.onload = function() {
    loadTasks();
};
