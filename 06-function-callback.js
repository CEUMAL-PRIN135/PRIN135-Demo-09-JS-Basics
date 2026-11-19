function addToDo(task, hours) {
    console.log(`Task ${task} with ${hours} hours estimate has been added.`);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  addToDo("Learn callbacks", 2);
});