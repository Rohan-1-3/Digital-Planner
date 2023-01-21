const menu = document.querySelector(".menu");
const navBar = document.querySelector(".projects");
const taskArea = document.querySelector(".task-list");
const tasks = document.querySelector(".tasks");
const task = document.querySelector(".task");
const addKey = document.querySelector(".add-task")
const addKeyVertical = document.querySelector(".vertical");
const addKeyHorizontol = document.querySelector(".horizontol");


menu.addEventListener("click", ()=>{
    menu.classList.toggle("change");
    navBar.classList.toggle("show");    
    taskArea.classList.toggle("show");
    tasks.classList.toggle("show");
    task.classList.toggle("show");
});

addKey.addEventListener("click", ()=>{
    addKeyVertical.classList.toggle("adding");
    addKeyHorizontol.classList.toggle("adding");
})