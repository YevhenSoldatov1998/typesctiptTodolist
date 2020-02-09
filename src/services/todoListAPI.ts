import {instance} from './instanceAxios'

export const todoListAPI = {
    getTodoLists: () => {
        return instance.get('todo-lists')
    },
    deleteTodoListItem: (todoListId: string) => {
        return instance.delete(`todo-lists/${todoListId}`)
    },
    addTodoLists: (title: string) => {
        return instance.post('todo-lists', {title})
    },
    getTask: (todoListId: string) => {
        return instance.get(`todo-lists/c521caf2-5458-4f2a-b3f0-232f2b1f5a29/tasks`)
            .then(res=>{
            debugger
        })
    },
    addTask: (todoListId?: string, task?: any) => {
        task = {title: 'TEST'}
        return instance.post(`todo-lists/c521caf2-5458-4f2a-b3f0-232f2b1f5a29/tasks`, {title: 'TEST'}).then(res=> {
            debugger
        })
    },
}
