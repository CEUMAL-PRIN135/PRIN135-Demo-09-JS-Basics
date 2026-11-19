const tasks = [
    { id: 1, "name": "Learn variables", isCompleted: true },
    { id: 2, "name": "Learn data types", isCompleted: true },
    { id: 3, "name": "Learn conditional statements", isCompleted: true },
    { id: 4, "name": "Learn loops", isCompleted: true },
    { id: 5, "name": "Learn functions", isCompleted: true },
    { id: 6, "name": "Learn scopes", isCompleted: false }
];

// Global scope example
function listTasks() {
    for (const task of tasks) {
        console.log(`Task: ${task.name}, Completed: ${task.isCompleted}`);
    }
}

listTasks();

// Block scope example
function toggleTodo(id) {
  const todo = tasks.find((t) => t.id === id);
  if (todo) todo.isCompleted = !todo.isCompleted;
}

console.log(todo);