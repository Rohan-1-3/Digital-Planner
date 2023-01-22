import DOManimation from "./modules/initialDOM";
import { accessProjects, projectAddingEvents } from "./modules/project";
import { addNewTaskEvent } from "./modules/taskAdd";

// const tasksSection = document.querySelector(".tasks");
// console.log(tasksSection.children[0].textContent);
DOManimation();
accessProjects();
projectAddingEvents();
addNewTaskEvent();
