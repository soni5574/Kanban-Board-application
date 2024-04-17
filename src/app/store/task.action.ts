import { createAction, props } from "@ngrx/store";
import { Task } from "../models/task.model";

export const addTask = createAction('[Task] Add' , props<{task: Task}>());
export const removeTask = createAction('[Task] Remove', props<{taskId: string}>());