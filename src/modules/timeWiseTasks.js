import isSameISOWeek from "date-fns/isSameISOWeek";
import editTask from "./editTaskDetails";
import { checkTaskExists, projectsArray, Task } from "./taskAdd";


const tasksSection = document.querySelector(".tasks");
const taskProjectName = document.querySelector(".task-list").children[0];
const addButton = document.querySelector(".add-task");

const getAllTask= ()=>{
    const allTask = document.querySelector(".all-task");
    allTask.addEventListener("click",()=>{
        addButton.classList.remove("hide");
        addButton.classList.add("hide");
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

const getTodayTasks = ()=>{
    const todayTasks = document.querySelector(".today");
    todayTasks.addEventListener("click", ()=>{
        addButton.classList.remove("hide");
        addButton.classList.add("hide");
        while(tasksSection.childElementCount>1){// removes the current projects tasks for new selected project
            tasksSection.lastChild.remove();
        }
        taskProjectName.textContent = "Today";
        const todaysDate = new Date().toJSON().slice(0,10);
        for(let i=0;i<projectsArray.length;i+=1){// taskes value from array and appends the seleceted projects task
            if(todaysDate === projectsArray[i].date){
                const newTask = new Task(projectsArray[i].project,projectsArray[i].title,
                    projectsArray[i].date,projectsArray[i].type, projectsArray[i].status);
                newTask.addingNewTask();
            }
        }
        checkTaskExists();
    })
}

const getWeekTasks = ()=>{
    const weekTasks = document.querySelector(".this-week");
    weekTasks.addEventListener("click", ()=>{
        addButton.classList.remove("hide");
        addButton.classList.add("hide");
        while(tasksSection.childElementCount>1){// removes the current projects tasks for new selected project
            tasksSection.lastChild.remove();
        }
        taskProjectName.textContent = "This Week";
        const todaysDate = new Date().toJSON().slice(0,10);
        
        for(let i=0;i<projectsArray.length;i+=1){// taskes value from array and appends the seleceted projects task
            const getDate = projectsArray[i].date.split("-");
            const getTodaysDate = todaysDate.split("-");
            if(isSameISOWeek(new Date(getTodaysDate[0], getTodaysDate[1], getTodaysDate[2]), 
            new Date(getDate[0], getDate[1], getDate[2]))){
                const newTask = new Task(projectsArray[i].project,projectsArray[i].title,
                    projectsArray[i].date,projectsArray[i].type, projectsArray[i].status);
                newTask.addingNewTask();
            }
        }
        checkTaskExists();
    })
}
export {getAllTask, getTodayTasks, getWeekTasks, addButton};