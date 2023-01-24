import DOManimation from "./modules/initialDOM";
import { accessProjects, projectAddingEvents, getProjectsName } from "./modules/project";
import { addNewTaskEvent, getTaskFromLocalStorage } from "./modules/taskAdd";

DOManimation();
accessProjects();
getTaskFromLocalStorage();
projectAddingEvents();
getProjectsName();
addNewTaskEvent();


