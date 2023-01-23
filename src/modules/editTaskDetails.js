import { projectsArray } from "./taskAdd";


const editForm = document.querySelector(".edit-task-form");
const mainContainer = document.querySelector(".main-container");
const editTask = ()=>{
    const editIcon = document.querySelector(".edit-icon");
    const taskProjectName = document.querySelector(".task-list").children[0].textContent;
    editIcon.addEventListener("click", ()=>{
        const oldName = ((editIcon.parentNode).parentNode).children[0];
        const oldDate = ((editIcon.parentNode).parentNode).children[1];
        const oldType = ((editIcon.parentNode).parentNode).children[2];

        const editName = document.querySelector(".edit-name");
        const editDate = document.querySelector(".edit-date");
        const editType = document.querySelector(".edit-type");
        const editButton = document.querySelector(".edit-task-button");

        editDate.value = new Date().toJSON().slice(0,10);
        editButton.addEventListener("click", (e)=>{
            e.preventDefault();
            for(let i=0;i<projectsArray.length;i+=1){
                if(oldName.textContent.toLowerCase() === projectsArray[i].title.toLowerCase()){
                    projectsArray[i].title = `${editName.value} (${taskProjectName})`;
                    projectsArray[i].date = editDate.value;
                    projectsArray[i].type = editType.value;
                }
            }
            oldName.textContent = `${editName.value} (${taskProjectName})`;
            oldDate.textContent = editDate.value;
            oldType.textContent = editType.value;
            editForm.classList.remove("adding");
            mainContainer.classList.remove("show");
        })
        // console.log(oldName.join(" "));
        editForm.classList.add("adding");
        mainContainer.classList.add("show");
    })
}

export default editTask