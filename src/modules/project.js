/* eslint-disable import/no-cycle */
import taskIcon from "./images/task_FILL0_wght400_GRAD0_opsz48.png";
import crossIcon from "./images/cross.png";
import { Task, projectsArray, checkTaskExists } from "./taskAdd";
import { addButton as plusButton } from "./timeWiseTasks";
import editTask from "./editTaskDetails";

const addNewProject = document.querySelector(".new-project");
const projectForm = document.querySelector(".project-form");
const addButton = document.querySelector(".add-button");
const newProjects = document.querySelector(".new-projects");
const cancelButton = document.querySelector(".cancle-button");
const tasksSection = document.querySelector(".tasks");
const projectsName = [];


const addingTaskToCurrentProject = ()=>{
    while(tasksSection.childElementCount>1){// removes the current projects tasks for new selected project
        tasksSection.lastChild.remove();
    }
    const taskProjectName = document.querySelector(".task-list").children[0].textContent;
    for(let i=0;i<projectsArray.length;i+=1){// taskes value from array and appends the seleceted projects task
        if(taskProjectName === projectsArray[i].project){
            const newTask = new Task(projectsArray[i].project,projectsArray[i].title,
                projectsArray[i].date,projectsArray[i].type, projectsArray[i].status);
            newTask.addingNewTask();
        }
    }
    checkTaskExists();
    editTask();
}

const accessProjects = ()=>{ // access names of projects
    const projects = document.querySelectorAll("#project");
    const projectTitle = document.querySelector(".task-list");
    projects.forEach((project)=>{
        project.addEventListener("click", ()=>{
            plusButton.classList.remove("hide");
            if(projectTitle.childNodes[1].textContent === project.textContent) return false;
            projectTitle.childNodes[1].textContent = project.textContent;
            addingTaskToCurrentProject();
            return 0;
        })
    })
}


const addProject = ()=>{// creates new project div and appends before the add button
    const newProjectName = document.querySelector(".projectAddPopup");

    if(newProjectName.value === ""){
        return false;
    }
    for(let i=0;i<projectsName.length;i+=1){// check if the project already exists
        if(newProjectName.value.toLowerCase() === projectsName[i]){
            newProjectName.style.borderColor = "red";
            return false;
        }
    }

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

    const projectTitle = document.querySelector(".task-list");
    projectTitle.childNodes[1].textContent = newProjectName.value;
    addingTaskToCurrentProject();
    projectsName.push(newProjectName.value.toLowerCase());
    // console.log(projectsName);
    plusButton.classList.remove("hide");

    newProjectName.value= "";
    projectForm.classList.remove("show");

    const crossImage = new Image();
    crossImage.src = crossIcon;
    newProjectDiv.appendChild(crossImage);

    crossImage.addEventListener("click", ()=>{
        const deletedProjectName = (crossImage.parentNode).children[1].textContent;
        if(tasksSection.childElementCount === 1){
            (crossImage.parentNode).remove();
            projectTitle.childNodes[1].textContent = "Casual";
            addingTaskToCurrentProject();
        }
        else{
            for(let i=0;i<=projectsArray.length;i+=1){// when project is deleted the project's all task gets deleted
                if(deletedProjectName === projectsArray[i].project){
                    projectsArray.splice(i,1);
                }
            }

            for(let i =0; i<=projectsName.length;i+=1){
                if(deletedProjectName === projectsName[i]){
                    projectsName.splice(i,1);
                }
            }
            (crossImage.parentNode).remove();
            // when a project gets deleted project gets back to Casual
            projectTitle.childNodes[1].textContent = "Casual";
            addingTaskToCurrentProject();
        }
    })
    accessProjects();
    return 0;
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

export {accessProjects, projectAddingEvents, addingTaskToCurrentProject}
export {projectForm, newProjects};