import taskIcon from "./images/task_FILL0_wght400_GRAD0_opsz48.png";
import crossIcon from "./images/cross.png";

const addNewProject = document.querySelector(".new-project");
const projectForm = document.querySelector(".project-form");
const addButton = document.querySelector(".add-button");
const newProjects = document.querySelector(".new-projects");
const cancelButton = document.querySelector(".cancle-button")

const accessProjects = ()=>{ // access names of projects
    const projects = document.querySelectorAll("#project");
    const projectTitle = document.querySelector(".task-list");

    projects.forEach((project)=>{
        project.addEventListener("click", ()=>{
            projectTitle.childNodes[1].textContent = project.textContent;
        })
    })
}

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

    crossImage.addEventListener("click", ()=>{
        (crossImage.parentNode).remove();
    })
    accessProjects();
}

const projectAddingEvents =()=>{
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
    });
}

export {accessProjects, projectAddingEvents}
export {projectForm, newProjects};