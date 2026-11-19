// Function declaration example
addToDo("Learn function declaration", 1);
addToDo("Learn function parameters and arguments", 2);

function addToDo(task, hours) {
    console.log(`Task ${task} with ${hours} hours estimate has been added.`);
}

// Function expression example
const addToDo = function (task, hours) {
    console.log(`Task ${task} with ${hours} hours estimate has been added.`);
}

addToDo("Learn function declaration", 1);
addToDo("Learn function parameters and arguments", 2);

// Arrow function example
const addToDo = (task, hours) => {
    console.log(`Task ${task} with ${hours} hours estimate has been added.`);
}

addToDo("Learn function declaration", 1);
addToDo("Learn function parameters and arguments", 2);