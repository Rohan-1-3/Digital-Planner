import taskIcon from "./images/task_FILL0_wght400_GRAD0_opsz48.png";
import crossIcon from "./images/cross.png";
import { Task, projectsArray, checkTaskExists } from "./taskAdd";
import { addButton as plusButton } from "./timeWiseTasks";

const addNewProject = document.querySelector(".new-project");
const projectForm = document.querySelector(".project-form");
const addButton = document.querySelector(".add-button");
const newProjects = document.querySelector(".new-projects");
const cancelButton = document.querySelector(".cancle-button");
const tasksSection = document.querySelector(".tasks");


const sth = ()=>{
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
}

const accessProjects = ()=>{ // access names of projects
    const projects = document.querySelectorAll("#project");
    const projectTitle = document.querySelector(".task-list");
    projects.forEach((project)=>{
        project.addEventListener("click", ()=>{
            plusButton.classList.remove("hide");
            if(projectTitle.childNodes[1].textContent === project.textContent) return false;
            projectTitle.childNodes[1].textContent = project.textContent;
            sth();
            return 0;
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

    const projectTitle = document.querySelector(".task-list");
    projectTitle.childNodes[1].textContent = newProjectName.value;
    sth();

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
            sth();
        }
        else{
            for(let i=0;i<=projectsArray.length;i+=1){// when project is deleted the project's all task gets deleted
                if(deletedProjectName === projectsArray[i].project){
                    projectsArray.splice(i,1);
                }
            }
            (crossImage.parentNode).remove();
            projectTitle.childNodes[1].textContent = "Casual";
            sth();
        }
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