import { createReducer, on } from "@ngrx/store";
import { Task } from "../models/task.model";
import { addTask, removeTask } from "./task.action";

export interface TaskState {
    tasks: Task[];
}

export const initialState: TaskState = {
    tasks: [
        {
            taskid: '001',
            taskName: "Application layout",
            status: 'Implementing'
          },
          {
            taskid: '002',
            taskName: "Add new task",
            status: 'ToDo'
          },{
            taskid: '003',
            taskName: "Edit task",
            status: 'Done'
          },
          {
            taskid: '004',
            taskName: "landing page layout",
            status: 'Implementing'
          },{
            taskid: '005',
            taskName: "Performance testing",
            status: 'ToDo'
          },{
            taskid: '006',
            taskName: "Drag and drop functionality",
            status: 'Done'
          },{
            taskid: '007',
            taskName: "Page login",
            status: 'Done'
          },{
            taskid: '008',
            taskName: "Security implementation",
            status: 'Implementing'
          },{
            taskid: '009',
            taskName: "Footer content",
            status: 'ToDo'
          },{
            taskid: '010',
            taskName: "Brard layout",
            status: 'Implementing'
          },
          {
            taskid: '011',
            taskName: "Repo migration",
            status: 'ToDo'
          },
    ]
};

export const taskReducer = createReducer(
    initialState,
    on(addTask, (state, { task }) => ({
        ...state,
        tasks: [...state.tasks, task]
    })),
    on(removeTask, (state, { taskId }) => ({
        ...state,
        tasks: state.tasks.filter(task => task.taskid !== taskId)
    }))
);