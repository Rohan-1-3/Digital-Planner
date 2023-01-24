import { projectsArray } from "./taskAdd";
import { sth } from "./project";


const editForm = document.querySelector(".edit-task-form");
const mainContainer = document.querySelector(".main-container");     
const editName = document.querySelector(".edit-name");
const editDate = document.querySelector(".edit-date");
const editType = document.querySelector(".edit-type");
const editButton = document.querySelector(".edit-task-button");

const sthh = (oldName)=>{
    for(let i=0;i<projectsArray.length;i+=1){
        const taskProjectName = document.querySelector(".task-list").children[0];

        if(oldName.toLowerCase() === projectsArray[i].title.toLowerCase()){
            projectsArray[i].title = `${editName.value} (${taskProjectName.textContent})`;
            projectsArray[i].date = editDate.value;
            projectsArray[i].type = editType.value;
            console.log(projectsArray)

            sth();
            return true;    
        }
    }
    return 0;
}

const editTask = ()=>{
    const editIcons = document.querySelectorAll(".edit-icon");
    editIcons.forEach((editIcon)=>{
        editIcon.addEventListener("click", ()=>{
            editIcon.classList.remove("event");
            const oldName = ((editIcon.parentNode).parentNode).children[0].textContent;
            const oldNameArray = oldName.split(" ")
            editName.value = oldNameArray.splice(0, oldNameArray.length-1).join(" ");
            editDate.value = new Date().toJSON().slice(0,10);

            editForm.classList.add("adding");
            mainContainer.classList.add("show");

            editButton.addEventListener("click", (e)=>{// submit button for edit form

                e.preventDefault();
                sthh(oldName);

                editForm.classList.remove("adding");
                mainContainer.classList.remove("show");
            })
        })
    })
}

export default editTask