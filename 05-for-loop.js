// For loop example
for (let i = 1; i <= 5; i++) {
  console.log(`Task ${i} added.`)
}

// For loop with array example for...of
let tasks = [
  { "name": "Learn variables", isCompleted: true },
  { "name": "Learn data types", isCompleted: true },
  { "name": "Learn conditional statements", isCompleted: true },
  { "name": "Learn loops", isCompleted: false }
];

for (const task of tasks) {
  console.log(`Task: ${task.name}, Completed: ${task.isCompleted}`);
}

// For loop with break and continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(`Task ${i} added.`)
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(`Task ${i} added.`)
}