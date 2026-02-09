const container = document.getElementById("container");
const addTask = document.getElementById("add-task");
const newTask = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");
const filters = document.getElementById("filters");
const filterSelect = document.getElementById("filter-select");
const taskList = document.getElementById("task-list");
const taskUl = document.getElementById("task-ul");
const summary = document.getElementById("summary");
const clearBtn = document.getElementById("clear-btn");  
const tasksCompletedStatusDisplay = document.getElementById("tasks-completed-status-display");  

addBtn.addEventListener("click", function() {
    let task = newTask.value;
    if (task) {
        let li = document.createElement("li");
        li.className = "task";
        li.innerHTML = `
            <input type="checkbox">
            <span class="task-name">${task}</span>
            <span class="tag high">High</span>
        `;
        taskUl.appendChild(li);
        newTask.value = "";
    }
}); 

filterSelect.addEventListener("change", function() {
    let filter = filterSelect.value;
    let tasks = taskUl.querySelectorAll(".task");
    tasks.forEach(task => {
        if (filter === "All") {
            task.style.display = "flex";
        } else if (filter === "Completed") {
            if (task.querySelector("input[type='checkbox']").checked) {
                task.style.display = "flex";
            } else {
                task.style.display = "none";
            }
        } else if (filter === "Pending") {
            if (!task.querySelector("input[type='checkbox']").checked) {
                task.style.display = "flex";
            } else {
                task.style.display = "none";
            }
        }
    });
});

clearBtn.addEventListener("click", function() {
    let tasks = taskUl.querySelectorAll(".task");
    tasks.forEach(task => {
        if (task.querySelector("input[type='checkbox']").checked) {
            task.remove();
        }
    });
});
    
clearBtn.addEventListener("click", function() {
    let tasks = taskUl.querySelectorAll(".task");
    tasks.forEach(task => {
        task.remove();
    });
}); 

filterSelect.addEventListener("change", function() {
    let filter = filterSelect.value;
    let tasks = taskUl.querySelectorAll(".task");
    tasks.forEach(task => {
        if (filter === "All") {
            task.style.display = "flex";
        } else if (filter === "Completed") {
            if (task.querySelector("input[type='checkbox']").checked) {
                task.style.display = "flex";
            } else {
                task.style.display = "none";
            }
        } else if (filter === "Pending") {
            if (!task.querySelector("input[type='checkbox']").checked) {
                task.style.display = "flex";
            } else {
                task.style.display = "none";
            }
        }
    });
}); 
