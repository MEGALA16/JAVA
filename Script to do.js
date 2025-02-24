document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task));
    };

    // Save tasks to local storage
    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll('#taskList li').forEach(taskItem => {
            tasks.push(taskItem.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Add task to DOM
    const addTaskToDOM = (task) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    };

    // Add task event
    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            addTaskToDOM(task);
            saveTasks();
            taskInput.value = '';
        }
    });

    // Load tasks on page load
    loadTasks();
});