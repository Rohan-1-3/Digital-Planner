import circle from "./images/circel.png";
import cross from "./images/cross.png";
import bgIconAfter from "./images/task-area-image-after.png";
import bgIconBefore from "./images/task-area-image.png";

// const projectsObject = {};
const projectsArray = [];
const checkTaskExists = ()=>{
    const tasksSection = document.querySelector(".tasks");
    const bgImage = document.querySelector(".bg-image");
    if(tasksSection.childElementCount > 1){// check if there are any task
        bgImage.src = bgIconAfter;// chnages bg image
    }
    else if(tasksSection.childElementCount === 1){
        bgImage.src = bgIconBefore;
    }
}

const Task = class{// constructor for collecting newTask info
    constructor(project,title, date, type, status){
        this.project = project
        this.title = title;
        this.date = date;
        this.type = type;
        this.status = status;
    }
    
    addingNewTask(){// creates and appends new task 
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

        if(this.status === "complete"){
            newTaskDiv.classList.add("complete");
        }

        tasksSection.appendChild(newTaskDiv);
        newTaskDiv.appendChild(taskName);
        newTaskDiv.appendChild(taskDate);
        newTaskDiv.appendChild(taskStatus);
        newTaskDiv.appendChild(taskButtons);
        taskButtons.appendChild(doneIcon);
        taskButtons.appendChild(deleteIcon);
        checkTaskExists();

        doneIcon.addEventListener("click", ()=>{
            const completedTaskTitle = ((doneIcon.parentNode).parentNode).children[0].textContent;
            for(let i =0; i<projectsArray.length;i+=1){ // chnages the status of the task 
                if(completedTaskTitle === projectsArray[i].title){
                    if(projectsArray[i].status === "complete"){
                        projectsArray[i].status = "incomplete"
                    }
                    else if(projectsArray[i].status === "incomplete"){
                        projectsArray[i].status = "complete";
                    };
                }
            }
            ((doneIcon.parentNode).parentNode).classList.toggle("complete");
            // console.log(projectsArray);  

        })

        deleteIcon.addEventListener("click", ()=>{
            const removedTaskTitle = ((deleteIcon.parentNode).parentNode).children[0].textContent;
            for(let i=0;i<projectsArray.length;i+=1){// removes the task from the main array
                if(removedTaskTitle === projectsArray[i].title){
                    // console.log(i);
                    projectsArray.splice(i,1);
                }
            }
            // console.log(projectsArray);
            ((deleteIcon.parentNode).parentNode).remove();
            checkTaskExists();
        })
    }

}

const addNewTask = ()=>{
    const taskFormName = document.querySelector(".form-name");
    const taskFormDate = document.querySelector(".form-date");
    const taskFormType = document.querySelector(".form-type");
    const taskProjectName = document.querySelector(".task-list").children[0].textContent;

    // gets value from the form
    const taskFormNameValue = taskFormName.value;
    const taskFormDateValue = taskFormDate.value
    const taskFormTypeValue = taskFormType.value
    const status = "incomplete";
    const addTaskForm = document.querySelector(".add-task-form");
    const newTask = new Task(taskProjectName ,taskFormNameValue, taskFormDateValue, taskFormTypeValue, status);
    newTask.addingNewTask();// calling function
    projectsArray.push(newTask);
    // console.log(newTask);

    
    // projectsArray.push(taskTitle.children[0].textContent);
    // const uniqueProjects = [...new Set(projectsArray)];
    // projectsObject.task = uniqueProjects;

    // resetting form value
    taskFormName.value = "";
    taskFormDate.value = new Date().toJSON().slice(0,10);
    taskFormType.value = "Normal";
    addTaskForm.classList.remove("adding");
    // console.log(projectsArray);
    // console.log(projectsObject);
}

const addNewTaskEvent = ()=>{
    const addTaskButton = document.querySelector(".add-task-button");
    const cancelTaskButton = document.querySelector(".cancel-task-button");
    const addKeyVertical = document.querySelector(".vertical");
    const addKeyHorizontol = document.querySelector(".horizontol");

    addTaskButton.addEventListener("click", (e)=>{
        e.preventDefault();
        addNewTask();
        addKeyVertical.classList.remove("adding");
        addKeyHorizontol.classList.remove("adding");// animation for add icon 
        const mainContainer = document.querySelector(".main-container");
        mainContainer.classList.remove("show");
    })

    cancelTaskButton.addEventListener("click", (e)=>{
        e.preventDefault();
        addKeyVertical.classList.remove("adding");
        addKeyHorizontol.classList.remove("adding");// animation for add icon 
        const mainContainer = document.querySelector(".main-container");
        mainContainer.classList.remove("show");
        (((cancelTaskButton.parentNode).parentNode).parentNode).classList.remove("adding");
    })
}

// eslint-disable-next-line import/prefer-default-export
export {addNewTaskEvent, projectsArray, Task, checkTaskExists};