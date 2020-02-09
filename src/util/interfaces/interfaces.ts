export interface ITodoList {
    id: string,
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
    id: string,
    todoListId: string,
    order: number,
    addedDate: string,
}
export interface IState {
    todoLists: ITodoList[],
}