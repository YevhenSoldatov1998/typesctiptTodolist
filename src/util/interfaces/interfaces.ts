export interface ITodoList {
    id: string,
    title: string,
    tasks: any[],
    filterValue: string
}
export interface ITask {
    id: number,
    title: string,
    isDone: boolean,
    priority: string
}
export interface IState {
    todoLists: ITodoList[],
}