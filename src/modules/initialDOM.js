import taskIcon from "/Users/Rohan/Desktop/JS_Practice/JavaScriptCourseOdinProject/ToDoList/dist/images/task_FILL0_wght400_GRAD0_opsz48.png"
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


    menu.addEventListener("click", ()=>{
        menu.classList.toggle("change");
        navBar.classList.toggle("show");    
        taskArea.classList.toggle("show");
        addTaskForm.classList.toggle("show");
        tasks.classList.toggle("show");
        task.classList.toggle("show");
    });

    addKey.addEventListener("click", ()=>{
        addKeyVertical.classList.toggle("adding");
        addKeyHorizontol.classList.toggle("adding");
        addTaskForm.classList.toggle("adding");
    });
}

const accessProjects = ()=>{
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

const addProject = ()=>{
    const newProjectName = document.querySelector(".projectAddPopup");
    const newProjectDiv = document.createElement("div");
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
    const removeProject = document.createElement("img");
    accessProjects();
}

addNewProject.addEventListener("click", ()=>{
    projectForm.classList.add("show");
});

addButton.addEventListener("click", (e)=>{
    e.preventDefault();
    addProject();
})

cancelButton.addEventListener("click", (e)=>{
    e.preventDefault();
    projectForm.classList.remove("show");
})

export {DOManimation, accessProjects,addProject};