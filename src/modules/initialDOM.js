import taskIcon from "./images/task_FILL0_wght400_GRAD0_opsz48.png";
import crossIcon from "./images/cross.png";

const DOManimation = ()=>{
    const menu = document.querySelector(".menu");
    const navBar = document.querySelector(".projects");
    const taskArea = document.querySelector(".task-list");
    const tasks = document.querySelector(".tasks");
    const task = document.querySelector(".task");
    const addKey = document.querySelector(".add-task")
    const addKeyVertical = document.querySelector(".vertical");
    const addKeyHorizontol = document.querySelector(".horizontol");
    const addTaskForm = document.querySelector(".add-task-form");


    menu.addEventListener("click", ()=>{ // for menu bar visible
        menu.classList.toggle("change");
        navBar.classList.toggle("show");    
        taskArea.classList.toggle("show");
        addTaskForm.classList.toggle("show");
        tasks.classList.toggle("show");
        task.classList.toggle("show");
    });

    addKey.addEventListener("click", ()=>{ // for adding task 
        addKeyVertical.classList.toggle("adding");
        addKeyHorizontol.classList.toggle("adding");// animation for add icon
        addTaskForm.classList.toggle("adding");// makes task form visible
    });
}

const accessProjects = ()=>{ // access names of projects
    const projects = document.querySelectorAll("#project");
    const projectTitle = document.querySelector(".task-list");

    projects.forEach((project)=>{
        project.addEventListener("click", ()=>{
            projectTitle.childNodes[1].textContent = project.textContent;
        })
    })
}

const addNewProject = document.querySelector(".new-project");
const projectForm = document.querySelector(".project-form");
const addButton = document.querySelector(".add-button");
const newProjects = document.querySelector(".new-projects");
const cancelButton = document.querySelector(".cancle-button")

const addProject = ()=>{// creates new project div and appends before the add button
    const newProjectName = document.querySelector(".projectAddPopup");

    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("new-project-title")
    newProjects.insertBefore(newProjectDiv, newProjects.children[newProjects.childElementCount-1]);

    const newProjectImage = new Image();
    newProjectImage.src = taskIcon;
    newProjectDiv.appendChild(newProjectImage);

    const newProjectButton = document.createElement("button");
    newProjectButton.id = "project";
    newProjectButton.textContent = newProjectName.value;
    newProjectDiv.appendChild(newProjectButton);
    newProjectName.value= "";
    projectForm.classList.remove("show");

    const crossImage = new Image();
    crossImage.src = crossIcon;
    newProjectDiv.appendChild(crossImage);
    
    accessProjects();
}

addNewProject.addEventListener("click", ()=>{
    projectForm.classList.add("show");// form for new project 
});

addButton.addEventListener("click", (e)=>{
    e.preventDefault();
    addProject();// submits form
})

cancelButton.addEventListener("click", (e)=>{
    const newProjectName = document.querySelector(".projectAddPopup")
    e.preventDefault();
    projectForm.classList.remove("show");
    newProjectName.value= ""; // cancels the form execution
})

export {DOManimation, accessProjects,addProject};