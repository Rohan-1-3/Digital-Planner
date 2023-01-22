import {projectForm,newProjects} from "./project";

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
        if(newProjects.childElementCount >2){
            const newProjectDiv = document.querySelectorAll(".new-project-title");
            newProjectDiv.forEach((x)=>{
                x.classList.toggle("show");
            })
        }
        menu.classList.toggle("change");
        navBar.classList.toggle("show");    
        taskArea.classList.toggle("show");
        addTaskForm.classList.toggle("show");
        projectForm.classList.remove("show");
        tasks.classList.toggle("show");
        task.classList.toggle("show");
        
    });

    addKey.addEventListener("click", ()=>{ // for adding task 
        addKeyVertical.classList.toggle("adding");
        addKeyHorizontol.classList.toggle("adding");// animation for add icon
        addTaskForm.classList.toggle("adding");// makes task form visible
    });
}

export default DOManimation