import { checkTaskExists, projectsArray, Task } from "./taskAdd";

const ath= ()=>{
    const tasksSection = document.querySelector(".tasks");
    const taskProjectName = document.querySelector(".task-list").children[0];

    const allTask = document.querySelector(".all-task");
    allTask.addEventListener("click",()=>{
        while(tasksSection.childElementCount>1){// removes the current projects tasks for new selected project
            tasksSection.lastChild.remove();
        }
        taskProjectName.textContent = "All Task";
        for(let i=0;i<projectsArray.length;i+=1){// taskes value from array and appends the all projects task
            const newTask = new Task(projectsArray[i].project,projectsArray[i].title,
                    projectsArray[i].date,projectsArray[i].type, projectsArray[i].status);
            newTask.addingNewTask();
        }
        checkTaskExists();
    });
}

export default ath;