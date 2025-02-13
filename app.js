// Get DOM elements
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task functionality
addTaskBtn.addEventListener("click", function () {
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");

    // Append delete button to the new task
    newTask.appendChild(deleteBtn);

    // Append new task to the task list
    taskList.appendChild(newTask);

    // Clear input field
    taskInput.value = "";
});

// Delete task functionality
taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        const listItem = event.target.parentElement;
        listItem.remove();
    }
});