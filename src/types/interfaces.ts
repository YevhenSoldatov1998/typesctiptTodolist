export interface ITodoList {
    _id: string,
    title: string,
    tasks: any[],
    filterValue: string
}
export interface ITask {
    description?: string,
    title: string,
    completed: boolean,
    status: number,
    priority: number,
    startDate?: string,
    deadline?: string,
    _id: string,
    todoListId: string,
    order: number,
    addedDate: string,
}
export interface ITaskUpdate {
    title?: string,
    description?: string,
    completed?: boolean,
    status?: number,
    priority?: number,
    startDate?: string,
    deadline?: string
}
export interface IState {
    todoLists: ITodoList[],
}