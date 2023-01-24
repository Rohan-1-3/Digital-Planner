import DOManimation from "./modules/initialDOM";
import { accessProjects, projectAddingEvents } from "./modules/project";
import { addNewTaskEvent, getTaskFromLocalStorage } from "./modules/taskAdd";

DOManimation();
accessProjects();
getTaskFromLocalStorage();
projectAddingEvents();
addNewTaskEvent();


