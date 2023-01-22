import circle from "./images/circel.png";
import cross from "./images/cross.png";
import bgIcon from "./images/task-area-image-after.png";

const checkTaskExists = ()=>{
    const tasksSection = document.querySelector(".tasks");
    const bgImage = document.querySelector(".bg-image");
    bgImage.src = bgIcon;
    if(tasksSection.children[0].textContent === "No Task Yet!"){
        tasksSection.children[0].remove();
    }
}

const Task = class{
    constructor(title, date, type){
        this.title = title;
        this.date = date;
        this.type = type;
    }
    
    sth(){
        const tasksSection = document.querySelector(".tasks");

        const newTaskDiv = document.createElement("div");
        newTaskDiv.classList.add("task");

        const taskName = document.createElement("p");
        taskName.textContent = this.title;

        const taskDate = document.createElement("p");
        taskDate.textContent = this.date;

        const taskStatus = document.createElement("p");
        taskStatus.textContent = this.type;

        const taskButtons = document.createElement("div");
        taskButtons.classList.add("task-option");

        const doneIcon = new Image();
        doneIcon.src = circle;

        const deleteIcon = new Image();
        deleteIcon.src = cross;

        tasksSection.appendChild(newTaskDiv);
        newTaskDiv.appendChild(taskName);
        newTaskDiv.appendChild(taskDate);
        newTaskDiv.appendChild(taskStatus);
        newTaskDiv.appendChild(taskButtons);
        taskButtons.appendChild(doneIcon);
        taskButtons.appendChild(deleteIcon);
        checkTaskExists();
    }
}

const addNewTask = ()=>{
    const taskFormName = document.querySelector(".form-name");
    const taskFormDate = document.querySelector(".form-date");
    const taskFormType = document.querySelector(".form-type");

    const taskFormNameValue = taskFormName.value;
    const taskFormDateValue = taskFormDate.value
    const taskFormTypeValue = taskFormType.value
    const addTaskForm = document.querySelector(".add-task-form");
    const newTask = new Task(taskFormNameValue, taskFormDateValue, taskFormTypeValue);
    newTask.sth();
    
    taskFormName.value = "";
    taskFormDate.value = new Date().toJSON().slice(0,10);
    taskFormType.value = "Normal";
    addTaskForm.classList.remove("adding");
}

const addNewTaskEvent = ()=>{
    const addTaskButton = document.querySelector(".add-task-button");
    const addKeyVertical = document.querySelector(".vertical");
    const addKeyHorizontol = document.querySelector(".horizontol");

    addTaskButton.addEventListener("click", (e)=>{
        e.preventDefault();
        addNewTask();
        addKeyVertical.classList.toggle("adding");
        addKeyHorizontol.classList.toggle("adding");// animation for add icon 
    })
}

export {addNewTaskEvent};