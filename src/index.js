import DOManimation from "./modules/initialDOM";
import { accessProjects, projectAddingEvents } from "./modules/project";
import { addNewTaskEvent } from "./modules/taskAdd";


DOManimation();
accessProjects();
projectAddingEvents();
addNewTaskEvent();

