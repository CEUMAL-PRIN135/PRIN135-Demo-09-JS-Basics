let stringDemo = "This is a string";
console.log("String: ", stringDemo, typeof stringDemo);

let numberDemo = 123;
console.log("Number: ", numberDemo, typeof numberDemo);

let floatDemo = 123.45;
console.log("Float: ", floatDemo, typeof floatDemo);

let booleanDemo = true;
console.log("Boolean: ", booleanDemo, typeof booleanDemo);

let nullDemo = null;
console.log("Null: ", nullDemo, typeof nullDemo);

let undefinedDemo = undefined;
console.log("Undefined: ", undefinedDemo, typeof undefinedDemo);

let objectDemo = { task: "Task 1", isComplete: true };
console.log("Object: ", objectDemo, typeof objectDemo);

let arrayDemo = ["Task 1", "Task 2", "Task 3"];
console.log("Array: ", arrayDemo, typeof arrayDemo);

const task = {
    task: "Learn Objects",
    isComplete: false,
    subtasks: ["dot notation",
        "bracket notation",
        "array inside an object",
        "call a method"],
    notify() {
        console.log(`${this.task}`)
    }
}

console.log(task.task);
console.log(task["isComplete"])
console.log(task.subtasks[2]);

task.isComplete = true;
console.log(task.isComplete);

task.notify()