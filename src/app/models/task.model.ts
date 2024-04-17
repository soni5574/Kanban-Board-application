export interface Task {
    taskid: string,
    taskName: string,
    status: 'ToDo' | 'Implementing' | 'Done' 
}