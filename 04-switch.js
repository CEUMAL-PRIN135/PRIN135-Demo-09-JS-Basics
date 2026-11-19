let currentFilter = "active";

switch (currentFilter) {
    case "active":
        console.log("Shows all active tasks.");
        break;
    case "completed":
        console.log("Shows all completed tasks.");
        break;
    default:
        console.log("Shows all tasks.");
}